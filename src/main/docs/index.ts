export default {
  openapi: '3.0.0',
  info: {
    title: 'Ads - Enquetes para Programadores',
    description: 'Essa é a documentação da API feita pelo curso do Rodrigo Manguinho na Udemy de NodeJs usando Typescript, TDD, Clean Architecture e seguindo os princípios do SOLID e Design Patterns.',
    version: '1.0.0',
    contact: {
      name: 'Anderson Pereira',
      email: 'andy2903.alp@gmail.com',
      url: 'https://www.linkedin.com/in/anderson-luiz-sanches-carlucci-pereira-b792b130/'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  externalDocs: {
    description: 'Link para o treinamento completo',
    url: 'https://www.udemy.com/course/tdd-com-mango/?referralCode=B53CE5CA2B9AFA5A6FA1'
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs relacionadas a Login'
  }, {
    name: 'Enquete',
    description: 'APIs relacionadas a Enquete'
  }]
}
