export interface RepositoryLinkProps {
  url: string
  name: string
  description: string | null
}

export function RepositoryLink(props: RepositoryLinkProps) {
  const { url, name, description } = props
  return (
    <a href={url} className="cursor-pointer p-4 hover:bg-slate-900 rounded">
      <h3 className="first-letter:uppercase font-bold">{name}</h3>
      <p>{description}</p>
    </a>
  )
}
