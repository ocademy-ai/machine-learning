---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.11.5
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Data Science in the cloud: The "Azure ML SDK" way

## Introduction

### What is Azure ML SDK?

Data scientists and AI developers use the Azure Machine Learning SDK to build and run Machine Learning workflows with the Azure Machine Learning service. You can interact with the service in any Python environment, including Jupyter Notebooks, Visual Studio Code, or your favorite Python IDE.

Key areas of the SDK include:

- Explore, prepare and manage the lifecycle of your datasets used in Machine Learning experiments.
- Manage cloud resources for monitoring, logging, and organizing your Machine Learning experiments.
- Train models either locally or by using cloud resources, including GPU-accelerated model training.
- Use automated Machine Learning, which accepts configuration parameters and training data. It automatically iterates through algorithms and hyperparameter settings to find the best model for running predictions.
- Deploy web services to convert your trained models into RESTful services that can be consumed in any application.

[Learn more about the Azure Machine Learning SDK](https://docs.microsoft.com/python/api/overview/azure/ml?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109)

In the [previous section](./the-low-code-no-code-way.md), we saw how to train, deploy and consume a model in a Low code/No code fashion. We used the Heart Failure dataset to generate and Heart failure prediction model. In this section, we are going to do the exact same thing but using the Azure Machine Learning SDK.

![project-schema](../../../images/project-schema.PNG)

### Heart failure prediction project and dataset introduction

Check [here](./the-low-code-no-code-way.md) the Heart failure prediction project and dataset introduction.

## Training a model with the Azure ML SDK

### Create an Azure ML workspace

For simplicity, we are going to work on a Jupyter Notebook. This implies that you already have a Workspace and a compute instance. If you already have a Workspace, you can directly jump to section 2.3 Notebook creation.

If not, please follow the instructions in section **2.1 Create an Azure ML workspace** in the [previous section](./the-low-code-no-code-way.md) to create a workspace.

### Create a compute instance

In the [Azure ML workspace](https://ml.azure.com/) that we created earlier, go to the compute menu and you will see the different compute resources available

![compute-instance-1](../../../images/compute-instance-1.PNG)

Let's create a compute instance to provision a Jupyter Notebook.

1. Click on the + New button. 
2. Give a name to your compute instance.
3. Choose your options: CPU or GPU, VM size and core number.
4. Click in the Create button.

Congratulations, you have just created a compute instance! We will use this compute instance to create a Notebook in the [Creating Notebooks section](#23-creating-notebooks).

### Loading the dataset

Refer to the [previous section](./the-low-code-no-code-way.md) in the section [Loading the dataset](#loading-the-dataset) if you have not uploaded the dataset yet.

### Creating Notebooks

```{note}
For the next step you can either create a new notebook from scratch, or you can upload the [notebook we created](../../assignments/data-science/data-science-in-the-cloud-the-azure-ml-sdk-way.ipynb) in you Azure ML Studio. To upload it, simply click on the "Notebook" menu and upload the notebook.
```

Notebooks are a really important part of the data science process. They can be used to Conduct Exploratory Data Analysis (EDA), call out to a computer cluster to train a model, and call out to an inference cluster to deploy an endpoint.

To create a Notebook, we need a compute node that is serving out the Jupyter Notebook instance. Go back to the [Azure ML workspace](https://ml.azure.com/) and click on Compute instances. In the list of compute instances, you should see the [compute instance we created earlier](#create-a-compute-instance).

1. In the Applications section, click on the Jupyter option.
2. Tick the "Yes, I understand" box and click on the Continue button.
![notebook-1](../../../images/notebook-1.PNG)
3. This should open a new browser tab with your Jupyter Notebook instance as follow. Click on the "New" button to create a notebook.

![notebook-2](../../../images/notebook-2.PNG)

Now that we have a Notebook, we can start training the model with Azure ML SDK.

### Training a model

First of all, if you ever have a doubt, refer to the [Azure ML SDK documentation](https://docs.microsoft.com/python/api/overview/azure/ml?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109). It contains all the necessary information to understand the modules we are going to see in this section.

#### Setup Workspace, experiment, compute cluster and dataset

You need to load the `workspace` from the configuration file using the following code:

```python
from azureml.core import Workspace
ws = Workspace.from_config()
```

This returns an object of type `Workspace` that represents the workspace. You need to create an `experiment` using the following code:

```python
from azureml.core import Experiment
experiment_name = 'aml-experiment'
experiment = Experiment(ws, experiment_name)
```

To get or create an experiment from a workspace, you request the experiment using the experiment name. Experiment name must be 3-36 characters, start with a letter or a number, and can only contain letters, numbers, underscores, and dashes. If the experiment is not found in the workspace, a new experiment is created.

Now you need to create a compute cluster for the training using the following code. Note that this step can take a few minutes. 

```python
from azureml.core.compute import AmlCompute

aml_name = "heart-f-cluster"
try:
    aml_compute = AmlCompute(ws, aml_name)
    print('Found existing AML compute context.')
except:
    print('Creating new AML compute context.')
    aml_config = AmlCompute.provisioning_configuration(vm_size="Standard_D2_v2", min_nodes=1, max_nodes=3)
    aml_compute = AmlCompute.create(ws, name=aml_name, provisioning_configuration=aml_config)
    aml_compute.wait_for_completion(show_output=True)

cts = ws.compute_targets
compute_target = cts[aml_name]
```

You can get the dataset from the workspace using the dataset name in the following way:

```python
dataset = ws.datasets['heart-failure-records']
df = dataset.to_pandas_dataframe()
df.describe()
```

#### AutoML configuration and training

To set the AutoML configuration, use the [AutoMLConfig class](https://docs.microsoft.com/python/api/azureml-train-automl-client/azureml.train.automl.automlconfig(class)?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109).

As described in the doc, there are a lot of parameters with which you can play with. For this project, we will use the following parameters:

- `experiment_timeout_minutes`: The maximum amount of time (in minutes) that the experiment is allowed to run before it is automatically stopped and results are automatically made available
- `max_concurrent_iterations`: The maximum number of concurrent training iterations allowed for the experiment.
- `primary_metric`: The primary metric used to determine the experiment's status.
- `compute_target`: The Azure Machine Learning compute target to run the Automated Machine Learning experiment on.
- `task`: The type of task to run. Values can be 'classification', 'regression', or 'forecasting' depending on the type of automated ML problem to solve.
- `training_data`: The training data to be used within the experiment. It should contain both training features and a label column (optionally a sample weights column).
- `label_column_name`: The name of the label column.
- `path`: The full path to the Azure Machine Learning project folder.
- `enable_early_stopping`: Whether to enable early termination if the score is not improving in the short term.
- `featurization`: Indicator for whether the featurization step should be done automatically or not, or whether customized featurization should be used.
- `debug_log`: The log file to write debug information to.

```python
from azureml.train.automl import AutoMLConfig

project_folder = './aml-project'

automl_settings = {
    "experiment_timeout_minutes": 20,
    "max_concurrent_iterations": 3,
    "primary_metric" : 'AUC_weighted'
}

automl_config = AutoMLConfig(compute_target=compute_target,
                             task = "classification",
                             training_data=dataset,
                             label_column_name="DEATH_EVENT",
                             path = project_folder,  
                             enable_early_stopping= True,
                             featurization= 'auto',
                             debug_log = "automl_errors.log",
                             **automl_settings
                            )
```

Now that you have your configuration set, you can train the model using the following code. This step can take up to an hour depending on your cluster size.

```python
remote_run = experiment.submit(automl_config)
```

You can run the RunDetails widget to show the different experiments.

```python
from azureml.widgets import RunDetails
RunDetails(remote_run).show()
```

## Model deployment and endpoint consumption with the Azure ML SDK

### Saving the best model

The `remote_run` is an object of type [AutoMLRun](https://docs.microsoft.com/python/api/azureml-train-automl-client/azureml.train.automl.run.automlrun?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109). This object contains the method `get_output()` which returns the best run and the corresponding fitted model.

```python
best_run, fitted_model = remote_run.get_output()
```

You can see the parameters used for the best model by just printing the fitted_model and see the properties of the best model by using the [get_properties()](https://docs.microsoft.com/python/api/azureml-core/azureml.core.run(class)?view=azure-ml-py#azureml_core_Run_get_properties?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109) method.

```python
best_run.get_properties()
```

Now register the model with the [register_model](https://docs.microsoft.com/python/api/azureml-train-automl-client/azureml.train.automl.run.automlrun?view=azure-ml-py#register-model-model-name-none--description-none--tags-none--iteration-none--metric-none-?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109) method.

```python
model_name = best_run.properties['model_name']
script_file_name = 'inference/score.py'
best_run.download_file('outputs/scoring_file_v_1_0_0.py', 'inference/score.py')
description = "aml heart failure project sdk"
model = best_run.register_model(
    model_name = model_name,
    model_path = './outputs/',
    description = description,
    tags = None
)
```

### Model deployment

Once the best model is saved, we can deploy it with the [InferenceConfig](https://docs.microsoft.com/python/api/azureml-core/azureml.core.model.inferenceconfig?view=azure-ml-py?ocid=AID3041109) class. InferenceConfig represents the configuration settings for a custom environment used for deployment. The [AciWebservice](https://docs.microsoft.com/python/api/azureml-core/azureml.core.webservice.aciwebservice?view=azure-ml-py) class represents a Machine Learning model deployed as a web service endpoint on Azure Container Instances. A deployed service is created from a model, script, and associated files. The resulting web service is a load-balanced, HTTP endpoint with a REST API. You can send data to this API and receive the prediction returned by the model.

The model is deployed using the [deploy](https://docs.microsoft.com/python/api/azureml-core/azureml.core.model(class)?view=azure-ml-py#deploy-workspace--name--models--inference-config-none--deployment-config-none--deployment-target-none--overwrite-false--show-output-false-?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109) method.

```python
from azureml.core.model import InferenceConfig, Model
from azureml.core.webservice import AciWebservice

inference_config = InferenceConfig(entry_script=script_file_name, environment=best_run.get_environment())

aciconfig = AciWebservice.deploy_configuration(
    cpu_cores = 1,
    memory_gb = 1,
    tags = {'type': "automl-heart-failure-prediction"},
    description = 'Sample service for AutoML Heart Failure Prediction'
)

aci_service_name = 'automl-hf-sdk'
aci_service = Model.deploy(ws, aci_service_name, [model], inference_config, aciconfig)
aci_service.wait_for_deployment(True)
print(aci_service.state)
```

This step should take a few minutes.

### Endpoint consumption

You consume your endpoint by creating a sample input:

```python
data = {
    "data":
    [
        {
            'age': "60",
            'anaemia': "false",
            'creatinine_phosphokinase': "500",
            'diabetes': "false",
            'ejection_fraction': "38",
            'high_blood_pressure': "false",
            'platelets': "260000",
            'serum_creatinine': "1.40",
            'serum_sodium': "137",
            'sex': "false",
            'smoking': "false",
            'time': "130",
        },
    ],
}

test_sample = str.encode(json.dumps(data))
```

And then you can send this input to your model for prediction :

```python
response = aci_service.run(input_data=test_sample)
response
```

This should output `'{"result": [false]}'`. This means that the patient input we sent to the endpoint generated the prediction `false` which means this person is not likely to have a heart attack.

Congratulations! You just consumed the model deployed and trained on Azure ML with the Azure ML SDK!

```{note}
Once you are done with the project, don't forget to delete all the resources.
```

## Your turn! 🚀

 There are many other things you can do through the SDK, unfortunately, we can not view them all in this section. But good news, learning how to skim through the SDK documentation can take you a long way on your own. Have a look at the Azure ML SDK documentation and find the `Pipeline` class that allows you to create pipelines. A Pipeline is a collection of steps which can be executed as a workflow.

```{note}
**HINT:** Go to the [SDK documentation](https://docs.microsoft.com/python/api/overview/azure/ml/?view=azure-ml-py?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109) and type keywords in the search bar like "Pipeline". You should have the `azureml.pipeline.core.Pipeline` class in the search results.
```

Assignment - [Data Science project using Azure ML SDK](../../assignments/data-science/data-science-project-using-azure-ml-sdk.md)

## Self study

In this section, you learned how to train, deploy and consume a model to predict heart failure risk with the Azure ML SDK in the cloud. Check this [documentation](https://docs.microsoft.com/python/api/overview/azure/ml/?view=azure-ml-py?WT.mc_id=academic-77958-bethanycheum&ocid=AID3041109) for further information about the Azure ML SDK. Try to create your own model with the Azure ML SDK.

## Acknowledgments

Thanks to Microsoft for creating the open-source course [Data Science for Beginners](https://github.com/microsoft/Data-Science-For-Beginners). It inspires the majority of the content in this chapter.
