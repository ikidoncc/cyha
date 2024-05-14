import { Avatar, AvatarFallback, AvatarImage } from '@cyha/components/ui/avatar'

export function Profile() {
  return (
    <header className="flex gap-4 p-4 items-center">
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/ikidoncc.png" />
        <AvatarFallback>IK</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <strong className="text-base">João Antonio</strong>
        <span className="text-sm opacity-70">Desenvolvedor Web</span>
      </div>
    </header>
  )
}
