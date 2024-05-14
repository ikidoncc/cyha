import {
  ResponseDataListRepositories,
  listRepositories,
} from '@app/utils/github-api'
import { useEffect, useState } from 'react'
import { RepositoryLink } from './repository-link'

export function ListProjects() {
  const [repositories, setRepositories] =
    useState<ResponseDataListRepositories>([])

  useEffect(() => {
    async function fetchRepos() {
      const repos = await listRepositories()
      setRepositories(repos.data)
    }
    fetchRepos()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      <h2 className="pl-4">Projetos</h2>

      <div className="flex flex-col gap-4">
        {repositories.map((repo) => (
          <RepositoryLink
            key={repo.id}
            url={repo.html_url}
            name={repo.name}
            description={repo.description}
          />
        ))}
      </div>
    </div>
  )
}
