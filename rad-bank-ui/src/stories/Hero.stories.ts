import { moduleMetadata } from '@storybook/angular';
import type { Story, Meta } from '@storybook/angular';
import { HeroComponent } from 'src/app/common-components/hero/hero.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';

export default {
  title: 'Components/Hero',
  component: HeroComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonComponentsModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Hero = Template.bind({});
Hero.args = {};
