import { jest } from '@jest/globals';

const openAiModel = jest.fn().mockReturnValue('openai-client');
const createOpenAIMock = jest.fn(() => openAiModel);

jest.mock('@ai-sdk/openai', () => ({
  __esModule: true,
  createOpenAI: createOpenAIMock,
}));

jest.mock('@ai-sdk/anthropic', () => ({ __esModule: true, createAnthropic: jest.fn() }));
jest.mock('@ai-sdk/google', () => ({ __esModule: true, createGoogleGenerativeAI: jest.fn() }));
jest.mock('@ai-sdk/deepseek', () => ({ __esModule: true, createDeepSeek: jest.fn() }));
jest.mock('@ai-sdk/groq', () => ({ __esModule: true, createGroq: jest.fn() }));

import { initializeAIClient } from '../ai-tools';

describe('initializeAIClient', () => {
  it('uses OpenAI when no config is provided', () => {
    const client = initializeAIClient();
    expect(createOpenAIMock).toHaveBeenCalledWith({ apiKey: '' });
    expect(openAiModel).toHaveBeenCalledWith('no-model');
    expect(client).toBe('openai-client');
  });
});
