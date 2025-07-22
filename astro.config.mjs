import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://magazord-plataforma.github.io',
	base: 'api-guidelines',
	integrations: [
		starlight({
			title: 'Magazord',
			logo: {
				light: './src/assets/logo-magazord.svg',
				dark: './src/assets/logo-magazord-dark.svg',
				replacesTitle: true,
			},
			customCss: ['./src/styles/custom.css'],
			social: {
				github: 'https://github.com/magazord-plataforma/magazord-base-de-conhecimento'
			},
	
			sidebar: [
				{
					label: 'Introdução 🚀',
					link: '/'
				},
				{
					label: "Diretrizes Gerais",
					items: [
						{
							label: "Regras de Extensão",
							link: "/diretrizes-gerais/regras-de-extensao"
						},
						{
							label: "Segurança",
							link: "/diretrizes-gerais/seguranca"
						},
						{
							label: "Tipos de Dados",
							link: "/diretrizes-gerais/tipos-de-dados"
						},
						{
							label: "JSON",
							link: "/diretrizes-gerais/json"
						}
					]
				},				
				{
					label: "Protocolo",
					items: [						
						{
							label: "Métodos HTTP",
							link: "/protocolo/metodos-http"
						},
						{
							label: "Códigos HTTP",
							items: [
								{
									label: "Regras Gerais",
									link: "/protocolo/codigos-http/regras-gerais",
								},
								{
									label: "200 - OK",
									link: "/protocolo/codigos-http/codigo-200"
								},
								{
									label: "201 - Created",
									link: "/protocolo/codigos-http/codigo-201"
								},
								{
									label: "204 - No Content",
									link: "/protocolo/codigos-http/codigo-204"
								},
								{
									label: "400 - Bad Request",
									link: "/protocolo/codigos-http/codigo-400"
								},
								{
									label: "401 - Unauthorized",
									link: "/protocolo/codigos-http/codigo-401"
								},
								{
									label: "403 - Forbidden",
									link: "/protocolo/codigos-http/codigo-403"
								},
								{
									label: "404 - Not Found",
									link: "/protocolo/codigos-http/codigo-404"
								},
								{
									label: "405 - Method Not Allowed",
									link: "/protocolo/codigos-http/codigo-405"
								},
								{
									label: "409 - Conflict",
									link: "/protocolo/codigos-http/codigo-409"
								},
								{
									label: "429 - Too Many Requests",
									link: "/protocolo/codigos-http/codigo-429"
								},
								{
									label: "500 - Internal Server Error",
									link: "/protocolo/codigos-http/codigo-500"
								},
							]
						}
					]
				},
				{
					label: "Mensagens",
					items: [
						{
							label: "Formato de Mensagens",
							link: "/mensagens/formato-de-mensagens"
						},
						{
							label: "Detalhamento de Erros",
							link: "/mensagens/detalhamento-de-erros"
						}
					]
				},				
				{
					label: "Execução",
					items: [
						{
							label: "Consultas",
							link: "/execucao/consultas"
						},
						{
							label: "Operações em Lote",
							link: "/execucao/operacoes-em-lote"
						},
						{
							label: "Paginação",
							link: "/execucao/paginacao"
						},
						{
							label: "Upload de Arquivos",
							link: "/execucao/upload-de-arquivos"
						},
						{
							label: "Download de Arquivos",
							link: "/execucao/download-de-arquivos"
						},
						{
							label: "Rate Limit",
							link: "/execucao/rate-limit"
						},
						{
							label: "Webhooks",
							link: "/execucao/webhooks"
						},
					]
				},
				{
					label: "Manutenção",
					items: [
						{
							label: "Nomemclatura",
							link: "/manutencao/nomenclatura"
						},
						{
							label: "Dicionário",
							link: "/manutencao/dicionario"
						},
						{
							label: "Versionamento",
							link: "/manutencao/versionamento"
						},
						{
							label: "Remoção Gradual",
							link: "/manutencao/remocao-gradual"
						},
					]
				},
				{
					label: "Changelog",
					link: "/changelog"
				},
			]
		})]
});
