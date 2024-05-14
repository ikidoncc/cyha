import { Octokit } from '@octokit/rest'
import {
  GetResponseDataTypeFromEndpointMethod,
  GetResponseTypeFromEndpointMethod,
} from '@octokit/types'

export const octokit = new Octokit({
  auth: import.meta.env.VITE_OCTOKIT_AUTH_TOKEN,
})

export type ResponseListRepositories = GetResponseTypeFromEndpointMethod<
  typeof octokit.repos.listForAuthenticatedUser
>

export type ResponseDataListRepositories =
  GetResponseDataTypeFromEndpointMethod<
    typeof octokit.repos.listForAuthenticatedUser
  >

export async function listRepositories(): Promise<ResponseListRepositories> {
  return await octokit.rest.repos.listForAuthenticatedUser()
}
