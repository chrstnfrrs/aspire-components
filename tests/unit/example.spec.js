import {mount} from '@vue/test-utils'
import ABtn from '@/components/ABtn.vue'
import AContainer from '@/components/AContainer.vue'

describe('ABtn.vue', () => {
  it('should render ABtn Component', () => {
    const wrapper = mount(ABtn);
    const button = wrapper.find("button");
    expect(button.isVisible()).toBe(true)
  })
})

describe('AContainer.vue', () => {
  it('should render AContainer Component', () => {
    const wrapper = mount(AContainer);
    const container = wrapper.find("div");
    expect(container.isVisible()).toBe(true)
  })
  it('should render AContainer Component', () => {
    const wrapper = mount(AContainer);
    expect(wrapper.classes()).toContain('a-container')
    expect(wrapper.classes('a-container')).toBe(true)
  })
})