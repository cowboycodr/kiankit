<main class="container max-w-[1024px] py-12">
	<article class="prose m-auto max-w-full dark:prose-invert">
		<section id="introduction">
			<h1>Introduction</h1>
			<p>
				KianKit is an open-source starter kit designed to simplify rapid application development.
				Built on top of SvelteKit, it provides an efficient way to kickstart your project by
				eliminating repetitive setup tasks, allowing developers to focus on building impactful
				features. With a range of integrated technologies, KianKit aims to make web development
				quick, fun, and accessible.
			</p>
		</section>

		<section id="techstack">
			<h1>Tech Stack</h1>
			<p>
				KianKit leverages the following technologies to provide a solid foundation for your
				application:
			</p>
			<ul>
				<li>
					<strong>SvelteKit</strong>: A modern, file-based framework for building web applications
					with Svelte.
				</li>
				<li>
					<strong>Supabase</strong>: An open-source backend-as-a-service alternative to Firebase.
				</li>
				<li><strong>Shadcn/ui</strong>: A library of customizable UI components.</li>
				<li>
					<strong>Tailwind CSS</strong>: A utility-first CSS framework for rapid UI development.
				</li>
				<li>
					<strong>Lucide Icons</strong>: A collection of open-source icons for your application.
				</li>
				<li>
					<strong>Fortawesome</strong>: Popular icon library for additional graphical elements.
				</li>
			</ul>
		</section>

		<section id="getting-started">
			<h1>Getting Started</h1>
			<p>Ready to jump in? Let's go!</p>

			<h3>Prerequisites</h3>
			<p>Before starting, ensure you have the following tools ready:</p>
			<ul>
				<li><strong>npm</strong> installed on your machine.</li>
				<li>A <strong>Supabase</strong> project created.</li>
			</ul>

			<h3>Installation Steps</h3>
			<ol>
				<li>
					<strong>Clone the repository</strong>:
					<pre><code>git clone &lt;repository-url&gt;</code></pre>
				</li>
				<li>
					<strong>Install dependencies</strong>:
					<pre><code>npm install</code></pre>
				</li>
				<li>
					<strong>Setup environment variables</strong>:
					<ul>
						<li>
							Rename <code>.env.example</code> to <code>.env</code> and fill in the necessary Supabase
							credentials.
						</li>
					</ul>
				</li>
			</ol>

			<h3>Running the Project</h3>
			<p>With everything set up, you can run the project locally:</p>
			<pre><code>pnpm run dev</code></pre>

			<p>KianKit is now running, and you're ready to start building!</p>
		</section>

		<section id="development">
			<h1>Development</h1>
			<p>
				KianKit comes with a well-structured setup to streamline the development process. Here's an
				overview:
			</p>

			<h3>Project Structure</h3>
			<pre><code>
src/lib/
├── components/    # UI components used across the application
├── layouts/       # Structures for different pages or sections
├── schemas/       # Data validation and structures
├── server/        # Server-side utilities
└── utils.js       # General helper functions

src/routes/
├── (app)/         # Main application routes
├── (auth)/        # Authentication-related pages (e.g., login, signup)
├── (landing)/     # Landing and promotional pages
└── sitemap.xml/   # Directory for generating a sitemap for SEO

static/            # Static assets like images and fonts
</code></pre>

			<h3>OAuth & Email Configuration</h3>
			<ul>
				<li>
					<strong>OAuth Setup</strong>: Set up OAuth with popular providers like Google and GitHub.
				</li>
				<li>
					<strong>Email Authentication</strong>: Configure an SMTP server for email & password
					authentication. Consider using services like <strong>Resend</strong> for easy setup.
				</li>
			</ul>

			<h3>Customization</h3>
			<p>
				KianKit is fully customizable, with integrated technologies like <strong>Svelte</strong>,
				<strong>Supabase</strong>, <strong>Tailwind CSS</strong>, and <strong>Lucide Icons</strong> to
				help you build modern and responsive applications efficiently.
			</p>

			<p>
				Feel free to modify the components, utilities, and routes to match your project
				requirements. The starter kit is built to be flexible, empowering you to bring your ideas to
				life quickly and effectively.
			</p>
		</section>
	</article>
</main>
