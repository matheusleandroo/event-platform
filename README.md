<h1 align="center">
  Event Platform
</h1>

<h3 align="center">
  A simple event platform.
</h3>

<h3>Getting Started</h3>

These instructions will get you a copy of the project up and running on your local machine for development purposes.

<h3>Prerequisites</h3>

<h4>NodeJS</h4>

You need to install NodeJS on your computer before you can use "**Event Platform**". You can install NodeJS by following <a href="https://nodejs.org/en/download/package-manager/">these instructions</a>.

Once you have completed the installation process, try typing **```npm -v```** into your command line. You should get a response with the version of NodeJS.

<h4>GraphCMS</h4>

You need to have a <a href="https://graphcms.com/">GraphCMS</a> account to be able to clone the database.

After creating your account, simply clone the database by <a href="rseat.in/lab-graphcms">clicking here</a>.

<h3>Deploy</h3>

After clone repository, go to folder and follow this steps:

- Create a file **`.env`** based on the file **`.env.example`**;
- Place your settings inside the **`.env`** file;
- Create a file **`codegen.yaml`** based on the file **`codegen.example.yaml`**;
- Place your settings inside the **`.codegen.yaml`** file;
- Run **`npm i`** to install dependencies;
- Run **`npm run codegen`**;
- Run **`npm run dev`** to start application.

Now you can use from your browser "**Event Platform**".

<h3>Built With</h3>

<ul>
  <li>ReactJS</li>
  <li>Vite</li>
  <li>GraphQL</li>
  <li>Apollo</li>
  <li>GraphCMS</li>
  <li>GraphQL Code Generator</li>
  <li>Tailwind CSS</li>
  <li>Vercel</li>
</ul>

<h3>Authors</h3>

<ul>
  <li><a href="http://matheusleandro.com">Matheus Leandro</a></li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License - see the <a href="https://github.com/matheusleandroo/reactjs-crud/blob/master/LICENSE">LICENSE.md</a> file for details.

Based on <a href="https://lp.rocketseat.com.br/inscricao/ignite-lab">Ignite Lab Rocketseat</a> :rocket:
