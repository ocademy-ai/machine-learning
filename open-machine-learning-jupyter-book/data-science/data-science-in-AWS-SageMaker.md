# Data science in AWS SageMaker 

Amazon SageMaker is a cloud service for machine learning provided by Amazon Web Services (AWS). It offers a complete platform that helps users build, train, and deploy machine learning models, along with a range of tools and algorithms that make machine learning more accessible and scalable.


We will learn how to use a [project](https://github.com/awslabs/amazon-sagemaker-mlops-workshop/) provided by AWS Labs to help users understand the machine learning workflow on the Amazon SageMaker platform. The project covers a series of work steps, from data preparation to model development and deployment, and also presents best practices for managing machine learning workflows in production. The project is mainly divided into the following parts:

1. Data Preparation: In this section, you will learn how to prepare a machine learning dataset and use Amazon SageMaker Data Labeling Tool for data labeling.
2. Model Development: In this section, you will develop and train machine learning models using Amazon SageMaker Notebook instances, as well as optimize models using Amazon SageMaker Automatic Model Tuning feature.
3. Model Evaluation and Interpretation: In this section, you will learn how to evaluate and interpret machine learning models using Amazon SageMaker model monitoring and interpretation features.
4. Model Deployment and Management: In this section, you will learn how to deploy trained models to production environments using Amazon SageMaker model deployment feature, and manage machine learning workflows using Amazon SageMaker management feature.

## Step 1

![SageMaker guide 1](../../images/SageMaker-guide-1.png)

Click the Launch Stack button, which will create the required S3 dataset and SageMaker in the cloud, then create a subnet and set the corresponding permissions so that they can access each other.

## Step 2

![SageMaker guide 2](../../images/SageMaker-guide-2.png)

We need to download the YAML file to our local machine from the Amazon S3 URL provided here. Since we do not need to use the high-end instance type like ml.m4.xlarge, we need to change InstanceType: "ml.m4.xlarge" to “ml.t2.medium” in the file.

![SageMaker guide 3](../../images/SageMaker-guide-3.png)

```{note}
If using ml.m4.xlarge, the notebook creation will not be successful.
```

Then, we can add the modified YAML file by clicking on the "Upload a template file" button.

## Step 3

![SageMaker guide 4](../../images/SageMaker-guide-4.png)

```{note}
If a private subnet is not configured, SageMaker Notebook instances cannot access other resources within the same subnet or within a VPC with permissions.
```

In AWS CloudFormation, NotebookInstanceSecGroupId is a parameter used to specify the security group ID for SageMaker Notebook instances. Security groups are virtual firewalls used to control inbound and outbound network traffic to EC2 instances. Since SageMaker Notebook instances run on EC2 instances, a security group is required to control network traffic.
The default value for the NotebookInstanceSecGroupId parameter is to select the "default security group". The default security group is automatically created when a VPC is created and allows all traffic to pass. If the default security group is selected, SageMaker Notebook instances can be accessed from all IP addresses.

the NotebookInstanceSubnetId parameter is used to specify the subnet where SageMaker Notebook instances are deployed, improving security and availability by deploying them in the specified network location.

## Step 4

After waiting for "create complete", a new notebook will be created in Amazon SageMaker.
![SageMaker guide 5](../../images/SageMaker-guide-5.png)

Clicking on "Open JupyterLab" will start the job.














