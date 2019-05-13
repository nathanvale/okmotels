describe('authentication', () => {
  it('can login', () => {
    const user = cy
    user
      .visit('/')
      .getByText(/login/i)
      .click()
      .getByLabelText(/username/i)
      .type('nathanvale')
      .getByLabelText(/password/i)
      .type('qwerty')
      .getByText(/Log In/i)
      .click()
      .getByTestId(/profile/i)
      .should('have.text', 'Your profileName: NathanE-mail: hi@nathanvale.com')
  })
})
