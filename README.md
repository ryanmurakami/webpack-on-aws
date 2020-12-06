# Examples running webpack v5 on AWS

[![Surfing the Web with Lambda Video](https://img.youtube.com/vi/IG__c0FyLh4/0.jpg)](https://www.youtube.com/watch?v=IG__c0FyLh4)

## 1. Run on AWS CodeBuild

- Create a CloudFormation stack with `.aws/codepipeline.template`
- Update the source to your repo
- Create a new stage & action
- Create a new CodeBuild project
  - It should use the `buildspec.yml` at the root of this project
- Run the pipeline

## 2. Run on AWS Amplify

- Create a new Amplify project connected to a GitHub repo
- It just works!

## 3. Run on AWS Lambda

- Create a new Lambda function
- Zip this repo and upload
- Increase the resources (to around 1024mb)
- Set timeout to 30 seconds
- Set handler to `lambda.build`
- Run & test

## License

All Images copyright Ryan Lewis

All Code under MIT license

