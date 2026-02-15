<script>
    import sotw from '$lib/assets/sotw.png';
    import sleeper from '$lib/assets/sleeper.png';
    import siteScreenshot from '$lib/assets/meta.png';
    import tf from '$lib/assets/tf.png';
    import ProjectTile from './tile.svelte';
    // Do things with data.posts such as sorting, filtering, etc.
</script>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Hi! I'm a software engineer by day and also I guess by night. Here are some things I've worked on!</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <ProjectTile 
        headerDesc="AWS Infrastructure" 
        header="Song of the Week"
        bodyText="I set up the AWS Infrastructure for the <a href=&quot;https://github.com/Song-of-the-Week/sotw-web-app&quot; class=&quot;text-indigo-500&quot;>Song of the Week web app</a>. The app portion was the brainchild of <a class=&quot;text-indigo-500&quot; href=&quot;https://github.com/dauerbach99&quot;>@dauerbach99</a>, who developed 98% of the app code. It came from a game that our friend group played every week, where we all submit Spotify links, then vote for our favorites and try to guess who submitted what. Unfortunately, with Spotify's <a class=&quot;text-indigo-500&quot; href=&quot;https://old.reddit.com/r/truespotify/comments/1l2am4i/spotify_just_killed_indie_development_with_their/&quot;>API changes</a>, the future of the app appears to be as no more than a project we can share with our small group of friends."
        image={sotw}
        imageAlt="Song of the Week AWS Infrastructure"
        link="https://github.com/Song-of-the-Week/SongOfTheWeekInfra"
      />
      <ProjectTile 
        headerDesc="Web Development" 
        header="This Website!"
        bodyText="I set up this website as a way to learn modern web development in SvelteKit and Tailwind CSS. I also wanted a place to share thoughts on a blog of sorts, since I'm mostly off of social media at this point. I also wanted an excuse to do some coding without the necessity of AI tools."
        image={siteScreenshot}
        imageAlt="A screenshot of the homepage of this website"
        link="https://github.com/Reddig/colinreddig.com"
      />
      <ProjectTile 
        headerDesc="AWS Infrastructure" 
        header="This Website's Infrastructure"
        bodyText="I set up the AWS Infrastructure for this site! It's using S3 + CloudFront, configured wholly via Terraform. I have plans to integrate API Gateway and allow people to sign up for emails or newsletter, but that's still in the works."
        image={tf}
        imageAlt="A screenshot of the homepage of this website"
        link="https://github.com/Reddig/colinreddig-dot-com-infra"
      />
      <ProjectTile
        headerDesc="Silly Go Project"
        header="Sleeper Fantasy Info"
        bodyText="This small project uses the Sleeper Fantasy API to query for which fantasy managers were the most prolific traders! It also displays which NFL players were traded the most within these leagues. This project was my introduction to golang."
        image={sleeper}
        imageAlt="Sleeper Fantasy Info"
        link="https://github.com/Reddig/sleeper-fantasy-info"
      />
    </div>
  </div>
</section>
