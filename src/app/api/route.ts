import type { NextApiRequest, NextApiResponse } from "next";
import { OpenAIApi, Configuration } from "openai";

type ResponseData = {
  text: string;
  model: string;
};

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string;
    model: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function GET(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { prompt, model } = req.body;

  if (!prompt || prompt === "") {
    return new Response("Please send your prompt", { status: 400 });
  }

  const aiResult = await openai.createCompletion({
    model: `${model}`,
    prompt: `${prompt}`,
    temperature: 0.6,
    max_tokens: 2048,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  const response =
    aiResult.data.choices[0].text || "Sorry, there was a problem!";
  res.status(200).json({ text: response, model: response });
}
