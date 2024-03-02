import { HfInference } from "@huggingface/inference";

const HF_TOKEN = "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";

const inference = new HfInference(HF_TOKEN);

// You can also omit "model" to use the recommended model for the task
const result = await inference.textClassification({
  model: 'khailai/roberta-offensive-classifier-beta',
  inputs: ['All is well']
})

console.log(result);