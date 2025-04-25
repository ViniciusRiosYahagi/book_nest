<script lang="ts">
    import bookNestLogo from '$lib/assets/app-logo.svg'
    import { Button } from '$lib';
</script>

<header class="flex justify-between items-center p-5 ">
    <a href="/">
        <img class="h-20" src={bookNestLogo} alt="logo">
    </a>
    <nav>
        <ul class="flex gap-5">
            <li>
                <Button isMenu={true} href="/register">Create account</Button>
            </li>
            <li>
                <Button isMenu={true} isSecondary={true} href="/login">Login</Button>
            </li>
        </ul>
    </nav>
</header>