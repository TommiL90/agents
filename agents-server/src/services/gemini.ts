import { GoogleGenAI } from '@google/genai'
import { env } from '../env.ts'

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
})

const model = 'gemini-2.5-flash'

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: 'Transcribe el audio al español. Sé preciso y natural en la transcripción. Mantén la puntuación adecuada y divide el texto en párrafos cuando sea apropiado.',
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        },
      },
    ],
  })

  if (!response.text) {
    throw new Error('No se pudo convertir el audio')
  }

  return response.text
}

export async function generateEmbeddings(text: string) {
  const response = await gemini.models.embedContent({
    model: 'text-embedding-004',
    contents: [{ text }],
    config: {
      taskType: 'RETRIEVAL_DOCUMENT',
    },
  })

  if (!response.embeddings?.[0].values) {
    throw new Error('No se pudieron generar los embeddings.')
  }

  return response.embeddings[0].values
}

export async function generateAnswer(
  question: string,
  transcriptions: string[]
) {
  const context = transcriptions.join('\n\n')

  const prompt = `
    Basándote en el texto proporcionado a continuación como contexto, responde la pregunta de forma clara y precisa en español.
  
    CONTEXTO:
    ${context}

    PREGUNTA:
    ${question}

    INSTRUCCIONES:
    - Usa únicamente información contenida en el contexto enviado;
    - Si la respuesta no se encuentra en el contexto, solo responde que no tienes información suficiente para responder;
    - Sé objetivo;
    - Mantén un tono educativo y profesional;
    - Cita fragmentos relevantes del contexto si es apropiado;
    - Si vas a citar el contexto, utiliza el término "contenido de la clase";
  `.trim()

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  })

  if (!response.text) {
    throw new Error('Error al generar respuesta con Gemini')
  }

  return response.text
}
