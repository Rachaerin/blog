import EditableLink from "../editable-link";

export default function Header() {
  return (
    <nav className="inline-block ml-2">
      <ul className="flex [&>li:not(:last-child):after]:content-['/'] [&>li:not(:last-child):after]:text-[#b3b3b3] [&>li:not(:last-child):after]:mx-1">
        <li>
          <EditableLink href="/">[ home ]</EditableLink>
        </li>
        <li>
          <EditableLink href="https://github.com/Rachaerin">
            [ about ]
          </EditableLink>
        </li>
        <li>
          <EditableLink href="/photos">[ photos ]</EditableLink>
        </li>
        <li>
          <EditableLink href="/friends">[ friends ]</EditableLink>
        </li>
      </ul>
    </nav>
  );
}
