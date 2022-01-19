describe('Home', () => {
  beforeEach(() => {
    cy.intercept('https://api.spaceflightnewsapi.net/v3/articles', { status: 200, fixture: 'articles' });
    cy.intercept('https://api.spaceflightnewsapi.net/v3/blogs', { status: 200, fixture: 'blogs'});
    cy.intercept('https://api.spaceflightnewsapi.net/v3/reports', { status: 200, fixture: 'reports'});
    cy.visit('http://localhost:3000/');
  })

  it('should have a sample test', () => {
    expect(true).to.equal(true);
  })

  it('should visit the home view at the / path', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  })

  it('should display the app\'s name and nav buttons', () => {
    cy.get('Nav')
      .get('.nav')
      .get('.header-link')
      .get('.space-out').contains('space-out')
      .get('.nav-link').contains('HOME')
			.next().contains('FAVORITES')
			.next().contains('SUBSCRIPTIONS')
  })
})

