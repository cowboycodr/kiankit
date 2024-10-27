# KianKit

KianKit is a powerful starter kit that combines the flexibility of SvelteKit with the robustness of Supabase, enabling you to build robust and feature-rich applications over the weekend.

## Getting Started

1. Clone the repository to your local machine.
2. Copy the `.env.example` file and rename it to `.env`.
3. Configure [OAuth](https://supabase.com/docs/guides/auth#social-auth) pages and a custom [SMTP](https://supabase.com/docs/guides/auth/auth-smtp) (I recommend Resend)
4. Configure the Supabase environment variables in the `.env` file with your Supabase project credentials.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcowboycodr%2FKianKit&env=PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY&project-name=kiankit-vercel-deployment)

> **Note:** KianKit is preconfigured for deployment on Vercel. However, you can easily change the deployment target by [modifying the adapter](https://kit.svelte.dev/docs/adapters) in the `svelte.config.js` file.

## Components & Layouts

KianKit offers a range of pre-designed, responsive components and layouts that are easy to use and highly adaptable to suit your needs.

- **SplitScreen**: A basic screen layout featuring a blank white area alongside an accented right-hand slot.
- **Header**: A straightforward header component with a centered navigation component designed to fit into the current size box. It includes one slot for the entire component.

## Tech Stack

KianKit leverages the following technologies to provide a solid foundation for your application:

- **SvelteKit**: A modern, file-based framework for building web applications with Svelte.
- **Supabase**: An open-source Firebase alternative that provides a complete backend-as-a-service solution.
- **Shadcn/ui**: A comprehensive library of accessible and customizable UI components.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Lucide**: A beautifully crafted open-source icon library.
- **Fortawesome**: A popular icon library with a vast collection of icons.

> In addition to simplicity, these libraries are [lightweight and fast](https://pagespeed.web.dev/analysis/https-kit-fromkian-com/8742el3ywj?form_factor=mobile).

## Principles

KianKit strictly adheres to these core principles, and we constantly try to better align with them:

- **Simplicity with extensibility**: Simplicity must not get in the way of extensibility and vice versa.
- **Minimalism**: Provide the user with what they need. Nothing else.
- **Eradicate complexity**: Minimize unnecessary (and sometimes necessary) complexity at all costs.

These principles aim to give contributors a clearer vision of our goals, and to ensure that KianKit remains user-friendly, efficient, and adaptable. By prioritizing simplicity with extensibility, providing only what is essential, and being efficient at all times, KianKit can offer developers a streamlined and productive experience. Ultimately leading to faster development cycles, and more maintainable codebases.

## Contributing

We welcome contributions to improve KianKit! If you encounter any issues or have suggestions for new features, please open an issue on the project's GitHub repository.

## License

KianKit is released under the [MIT License](LICENSE).
