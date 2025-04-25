import type { Snippet } from "svelte";

export interface BasicProps {
    children: Snippet
    isSecondary?: boolean
    isDanger?: boolean
    isMenu?: boolean
}

interface ButtonProps extends BasicProps {
    onclick: (e: MouseEvent) => void
    href?: never
}

interface LinkProps extends BasicProps {
    href: string
    onclick?: never
}

export type ComponentProps = ButtonProps | LinkProps