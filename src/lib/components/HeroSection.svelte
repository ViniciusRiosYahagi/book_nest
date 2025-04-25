<script lang="ts">
	import { Button } from "$lib";
    import heroImage from "$lib/assets/hero.png"
</script>

<section class="h-screen flex justify-evenly items-center">
    <div class="max-w-3xl">
        <h1 class="text-8xl">Book Nest</h1>
        <h3 class="text-3xl mb-15">Your personal book library.</h3>
        <h4 class="text-2xl mb-10">
            Create your very own digital library where you can keep
            track of every book you own, read and love.
            Our app offers a beautifully designed, easy-to-use interface
            that makes managing your book collection a joy
        </h4>
        <Button href="/register">Sign Up</Button>
    </div>
    <img class="h-96" src={heroImage} alt="desk and many books">
</section>
