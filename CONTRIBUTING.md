# Guidelines for contributing

Thank you for your interest in contributing to this open-source project! We greatly value feedback and contributions from our community.

Please read through this document before you submit any pull requests or issues. It will help us work together more effectively.

## What to expect when you contribute

When you submit a pull request, our team is notified and will respond as quickly as we can. We'll do our best to work with you to ensure that your pull request adheres to our style and standards. If we merge your pull request, we might make additional edits later for style or clarity.

The source files on GitHub aren't published directly on the official website. If we merge your pull request, we'll publish your changes to the staging website as soon as we can, but they won't appear immediately or automatically.

We look forward to receiving your pull requests for:

* New content you'd like to contribute (such as new code samples or tutorials)
* Inaccuracies in the content
* Information gaps in the content that need more detail to be complete
* Typos or grammatical errors
* Suggested rewrites that improve clarity and reduce confusion

**Note:** We all write differently, and you might not like how we've written or organized something currently. We want that feedback. But please be sure that your request for a rewrite is supported by the previous criteria. If it isn't, we might decline to merge it.

## How to contribute

<details>
<summary><b>Start by cloning the repo and fork to your local machine.</b></summary>

```bash
git clone https://github.com/<UserName>/machine-learning.git
```

> **Warning**
>
> You may see below errors that prevent you from connecting to the remote repository, or timeout errors when you do push operations, especially if you are using the HTTP protocol.
>
> ```bash
> Permission denied (publickey).
> fatal: Could not read from remote repository.
> fatal: unable to access 'https://github.com/<UserName>/machine-learning.git/': Recv failure: Connection was reset.
> fatal: unable to access 'https://github.com/<UserName>/machine-learning.git/': The requested URL returned error : 403.
> ```
>
> Solution:
>
> 1. Use [SSH protocol](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to access the repo if you face network issue.
> 2. Try more times in case the push operation fails occasionally.

</details>

Then, please follow the below guidance based on your needs.

- [Guidelines for contributing to awesome lists](./awesome/CONTRIBUTING.md)
- [Guidelines for contributing to the open Machine Learning book](./open-machine-learning-jupyter-book/CONTRIBUTING.md)

## Code of conduct

See the [code of conduct](./CODE_OF_CONDUCT.md) for more information.

## Licensing

See the LICENSE files([code](./LICENSE-CODE), [text](./LICENSE-TEXT)) for this project's licensing. We will ask you to confirm the licensing of your contribution. We may ask you to sign a [Contributor License Agreement (CLA)](http://en.wikipedia.org/wiki/Contributor_License_Agreement) for larger changes.

## FAQ

### How to configure ssh public and private keys?

Follow the [ Atlassian Git SSH](https://www.atlassian.com/git/tutorials/git-ssh) official guidance to learn about Git and SSH.
Then open GitHub, go to the configuration page, select SSH and GPG keys, select New SSH key, then use the text tool to open the id_rsa.pub file that was generated earlier, copy the contents to the input box below the key, define a name for the key, and save it.

To change all of your local protocols to SSH, you can do the following:

> 1. Open the command line terminal and go to the directory in your local repository.
> 
> 2. Enter the following command to view the current remote repository address:
>
> ```bash
> git remote -v
> ```
>
> The output should look something like:
>
> ```bash
> origin  http://github.com/<username>/<repository>.git (fetch)
> origin  http://github.com/<username>/<repository>.git (push)
> ```
> 
> 3. copy the SSH URL from GitHub (format:git@github.com:<username>/<repository>.git)
>
> 4. Enter the following command to change the URL of the remote repository to the SSH URL:
> 
> ```bash
> git remote set-url origin git@github.com:<username>/<repository>.git
> ```
>
> 5. Updated upstream remote repository link:
> 
> ```bash
> git remote set-url upstream git@github.com:ocademy-ai/machine-learning.git
> ```
> 
> **Warning**
> You may encounter following problem when you configure SSH.
>
> ```bash
> HP@DESKTOP-H1SBMME MINGW64 ~/.ssh
> $ ~/.ssh/config
> bash: /c/Users/HP/.ssh/config: No such file or directory
> ```
> 
> Solution:
>
> 1. To create the file using the Git Bash terminal, you can use the following command to create an empty SSH config file in your home directory:
> 
> ```bash
> touch ~/.ssh/config
> ```
>
> 2. add the following to SSH config file
>
> ```bash
> Host github.com
> HostName github.com
> User git
> IdentityFile ~/.ssh/id_rsa
> ```
>
> **Warning**
> You may encounter following problem when you use git push.
>
> ```bash
> ssh: connect to host github.com port 22: Connection refused
> fatal: Could not read from remote repository.
> Please make sure you have the correct access rights
> and the repository exists.
> ```
>
> Solution:
> 
> Make sure you configured SSH correctly
