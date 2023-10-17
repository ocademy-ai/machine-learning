# It Takes a Village: Critical Data Science Roles for Project Success

## Project Roles

In the following different roles of a data science project are introduced. This list covers the most common roles and is not definitive.
The role description aims to introduce the respective role, show case their key duties, but is far from explaining all the details about each role.

The roles are explained from a data scientist's viewpoint - how the other roles interact with each other is neglected for this document.

### Data Scientist

<sup>Job titles: Data Scientist, Research Scientist, Applied Scientist</sup>

As a data scientist you are the one working with some data trying to get the desired insight out of it.
The desired insights can be many things e.g., a pure, one-time data analysis or a complex prediction algorithm - in general its very client and project specific.
To achieve that you work with the data, clean it, prepare, and enhance it. You apply methods ranging from statistical analysis to machine learning.
This is a summary of the core job of a data scientist.
However, clients usually (99.999%) are only interested in our insights if they are useful and usable for their business.

> **Pure data science insights vs. complete solution**
>
> Imagine, you buy a car. The car manufacturer gives you 4x tyres, 1x steering wheel and 1x engine and says to you: "You'll figure it out."

Basically, they want a complete solution in which your insights are embedded.
Fortunately, there are other roles on a project team to help you build such a solution for the client.

### Software Engineer

<sup>Job titles: Machine Learning Engineer, Software Engineer, IT Specialist</sup>

Like Data Scientist, Software Engineers work with code, however their code is much more explicitly programmed - their algorithms will not improve over time unless someone changes the code.
This has some key advantages:
You always know how the code behaves and the behaviour won't change.
This makes this code very stable compared to machine learning based algorithms.

There are many different variates of software engineers out there. Here are some you may encounter:

- **Frontend Developers** work on the frontend of a solution also known as User Interface (UI).
They develop beautiful and intuitive websites, mobile or desktop apps.
If your algorithm will later run on e.g. the user's mobile device then the frontend developer will help you integrate it into the app (see [Edge Deployment](https://github.com/IBM/data-science-best-practices/blob/main/edge_deployment.md#chapter-15---edge-deployment)).
- **Backend Developers** work on the server-side of the solution.
Since this part is behind the frontend, it is often referred to as backend.
They make sure that for example a website loads instantly, and millions of customers can access it in parallel. If your algorithm will later run on the backend then the backend developer will work with you on the integration (see [Cloud Deployment](https://github.com/IBM/data-science-best-practices/blob/main/cloud_deployment.md#chapter-14---cloud-deployment)).
- **DevOps Engineer** work on the [automation](https://github.com/IBM/data-science-best-practices/blob/main/automation.md#chapter-17---automation) of the build, [distribution](https://github.com/IBM/data-science-best-practices/blob/main/distribution.md#chapter-13---distribution) and deployment.
They help turn your source code into a runnable form and put it at the right place.

As a special form, you may also encounter **Full Stack Developers** - this basically describes someone who has knowledge in all or the majority of the above-mentioned software engineering topics.
Their advantage is that they can cover a large topic span in one person.
The name 'full stack' refers to the 3-tier [architecture](https://github.com/IBM/data-science-best-practices/blob/main/architecture.md#chapter-3---architecture), where the 3 tiers can also be seen as a stack of tiers.

### Data Engineer

<sup>Job titles: Data Engineer</sup>

Data Engineers are usually the ones providing the data to you.
They mainly work on how to store and process the data throughout the application (see [Data Management](https://github.com/IBM/data-science-best-practices/blob/main/data_management.md#chapter-7---data-management)).
In some smaller project this role might not be present, but since most data science projects are quite data intensive, there is usually also a dedicated role to make sure data is handled effectively and efficiently.

### IT Architect

<sup>Job titles: Software Architect, IT Architect</sup>

IT Architects (like real [architects](https://en.wikipedia.org/wiki/Architecture)) plan and design the solution.
They specify which components make up the solution, what they do and how they interact with each other. They decide where and under which conditions / surroundings your algorithm will need to run.
Often the IT architect of the project also covers the role of **Technical Lead** - as the highest technical authority on the project.
> Although IT Architects don't work with any code on the project directly, many IT architects know quite well how to develop something - most of them have a history as software engineer.
> However, this is not a general rule.

### Project Manager

<sup>Job titles: Tech Program Manager, Project Manager</sup>

The project is usually lead by a project manager.
This is a non-technical role and they're responsible that the project team delivers what was promised to the client.
They make sure the project stays in budget and they are providing you with a claim code.
They help you chase the client for deliverables or answers on your questions.

If you hit a wall in your project on one of your deliverables, because you need some input from the client, the project manager needs to know that you're blocked.
They can help you to chase the client for that piece of information, but they can't tell you what to do as mitigation on a technical level - since a project manager is a non-technical role.

> Some project managers also have a history as a software engineer, so they may be able to help you also on some technical level, but this is not a general rule.

In a project, that is well-managed by a project manager, the role of the project manager might seem obsolete, but it isn't.

### Business Analyst

<sup>Job titles: Data Analyst, Business Analyst, Data Consultant</sup>

Another non-technical role on the project is the business analyst.
The business analyst understands the client's business and can translate between the more technical roles and the client's business side.
If you need to know why the client wants, you to predict a certain output then the business analyst is probably the best to help you with that.
They can tell you what which data point means and what's the business background for the project.

> In the data you found a cryptic feature with more cryptic numbers like '4, '83' and '127'.
> The business analyst may be able to help you understand what these numbers mean in the business context and therefore help you decide, how you should use them in your algorithm.

Business analysts have some technical understanding, but usually they can't help you with deeply / purely technical questions.

### Testing Engineer

<sup>Job titles: QA Engineer, Testing Engineer, Software Engineer</sup>

As you probably know everyone who writes code is also responsible to write tests for their code to make sure their code works as expected.
However to ensure the solution as a whole also works as expected, dedicated testers put the solution to the test - while data scientists and software engineers often focus on [testing](https://github.com/IBM/data-science-best-practices/blob/main/testing.md#chapter-10---testing) their small part of the solution.
Some code writing roles see testers as a 'pain in the ass' that just cause additional work and frustration, but consider this:

> Would you rather have a tester helping you ensure your solution works as expected OR would like to have furious users declaring your hard work is 'pure garbage'?

Testers will try out the solution based on the defined requirements, so it is important for them and for you to be aligned on what is in scope for the solution and what is not.

> Before code is handed over to testers, it needs to have passed some level of [testing](https://github.com/IBM/data-science-best-practices/blob/main/testing.md#chapter-10---testing) by the code / programmer.
> The availability of testers is not an excuse for failing to write unit tests!

### Designer

<sup>Job titles: Designer, UI/UX Designer</sup>

In most cases the insights you produce will ultimately need to be provided to a human being a.k.a. the users (usually on the client side).
The designers make sure the insights / information provided by the solution are best consumable for the users. There are two main topics they focus on:

- **User eXperience design (UX)** defines the medium the user will use for the interaction with our solution.
For example, for some cases a mobile app may be better whereas for other cases a website viewed on a desktop might be better / more intuitive / handy.
- **User Interface design** defines how the actual user interface will look (or sound or feel) like.
For example, which part should be coloured with a red-like colour to give it a warning like sense.

Both topics work hand in hand and you can't have one without the other.
As the designers are often tasked to visualize your results their design will shape how your algorithm is used.

>Example: For a classification case the designed UI might only visualize the predicted class, but it might also visualize the confidence of your prediction and the confidence for the alternatives - so your algorithm needs to be able to provide that desired output.

### Credit
Credit to Data Science - Best Practices is licensed under a [Creative Commons Attribution 4.0](http://creativecommons.org/licenses/by/4.0/) International License by [IBM](https://www.ibm.com), with changes made. 