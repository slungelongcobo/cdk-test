import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
      const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('OWNER/REPO', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth']
      })
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MyPipelineQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
