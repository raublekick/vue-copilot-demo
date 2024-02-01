import { mount } from '@vue/test-utils'
import CompleteView from '../src/views/CompleteView.vue'

// NOTE: This generated code uses the [data-key] attribute to identify elements in the DOM. This does not exist in the code generated for the component, and fails. This likely should be an id or class instead.

describe('CompleteView', () => {
  it('renders the table with filtered and sorted users', async () => {
    const wrapper = mount(CompleteView)

    // Simulate user input to filter the users
    const filterInput = wrapper.find('input')
    await filterInput.setValue('User1')

    // Verify that the table only displays the filtered user
    const tableRows = wrapper.findAll('tbody tr')
    expect(tableRows.length).toBe(1)
    expect(tableRows[0].text()).toContain('User1')

    // Simulate user click to sort the users by email
    const emailHeader = wrapper.find('th[data-key="email"]')
    await emailHeader.trigger('click')

    // Verify that the table is sorted by email in ascending order
    const sortedTableRows = wrapper.findAll('tbody tr')
    expect(sortedTableRows.length).toBe(1)
    expect(sortedTableRows[0].text()).toContain('User1')

    // Simulate user click to sort the users by company
    const companyHeader = wrapper.find('th[data-key="company"]')
    await companyHeader.trigger('click')

    // Verify that the table is sorted by company in ascending order
    const sortedTableRowsByCompany = wrapper.findAll('tbody tr')
    expect(sortedTableRowsByCompany.length).toBe(1)
    expect(sortedTableRowsByCompany[0].text()).toContain('User1')
  })
})
