import { moduleMetadata } from '@storybook/angular';
import type { Story, Meta } from '@storybook/angular';
import { HeaderComponent } from 'src/app/common-components/header/header.component';
import { CommonComponentsModule } from 'src/app/common-components/common-components.module';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
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

export const Header = Template.bind({});
Header.args = {};
