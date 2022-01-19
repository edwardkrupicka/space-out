import { fetchAllData } from "../../src/services/api/api";

describe('Home', () => {

  beforeEach(function() {
    // cy.fixture('articles.json').as('articles');
    // cy.fixture('blogs.json').as('blogs');
    // cy.fixture('reports.json').as('reports');
  
    // // network stub
    // cy.server();
    // cy.route('GET', `https://api.spaceflightnewsapi.net/v3/articles`, '@articles').as('fetchArticleData');
    // cy.route('GET', `https://api.spaceflightnewsapi.net/v3/blogs`, '@blogs').as('fetchBlogData');
    // cy.route('GET', `https://api.spaceflightnewsapi.net/v3/reports`, '@reports').as('fetchReportData');
    
  
    cy.visit('http://localhost:3000/');
    // cy.wait('@fetchArticleData');
    // cy.wait('@fetchBlogData');
    // cy.wait('fetchReportData');
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true);
  })

  it('should visit the home view at the / path', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('should display the app\'s name and nav buttons and navigate when a link button is pushed', () => {
    cy.get('Nav')
      .get('.nav')
      .get('.header-link')
      .get('.space-out').contains('space-out')
      .get('.nav-link').contains('HOME')
			.next().contains('FAVORITES').click().url().should('eq', 'http://localhost:3000/#/favorites')
      .get('.nav-link').contains('HOME').click().url().should('eq', 'http://localhost:3000/#/')
			.get('.nav-link').contains('SUBSCRIPTIONS').click().url().should('eq', 'http://localhost:3000/#/subscriptions')
			.get('.header-link').contains('space-out').click().url().should('eq', 'http://localhost:3000/#/')
  })

  it('should display a grid of cards', () => {
    cy.get('.home-container')
      .get('.grid')
      .get('.card').should('have.length', 30)
  })

  it('should display info and buttons when you hover over card', () => {
    cy.get('.grid')
      .get('.card.13634').get('.content').get('.title').contains(`Federal budget stalemate having ‘ripple effects’ on national security space missions`).click()

      
  })

  
})

