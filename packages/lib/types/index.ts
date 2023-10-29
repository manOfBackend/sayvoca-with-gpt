import { addWordSchema, signUpSchema, userAuthSchema, userRoleSchema } from "../validations/auth"
import { sentenceHistoryResponseSchema, sentenceInputSchema, sentencePageResponseSchema, sentenceProblemResponseSchema, sentenceResponseSchema, sentenceSchema, userInfoResponseSchema } from "../validations/word"
import { z } from "zod"

export * as env from '../env.mjs'

export type UserRole = z.infer<typeof userRoleSchema>

export type Inputs = z.infer<typeof userAuthSchema>

export type AddWord = z.infer<typeof addWordSchema>

export type signUpInputs = z.infer<typeof signUpSchema>

export type Sentence = z.infer<typeof sentenceSchema>

export type SentenceResponse = z.infer<typeof sentenceResponseSchema>

export type SentenceProblemResponse = z.infer<typeof sentenceProblemResponseSchema>

export type SentenceHistoryResponse = z.infer<typeof sentenceHistoryResponseSchema>

export type UserInfoResponse = z.infer<typeof userInfoResponseSchema>

export type SentencePage = z.infer<typeof sentencePageResponseSchema>

export type InputSentence = z.infer<typeof sentenceInputSchema>

export type CommonErrorCode = 'too_many_requests'

export type SignInErrorCode = CommonErrorCode | 'form_password_incorrect' | 'form_identifier_not_found'

export type SignUpErrorCode = CommonErrorCode | 'form_identifier_taken'
