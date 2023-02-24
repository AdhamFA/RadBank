import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import type { Story, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeroComponent } from 'src/app/common-components/hero/hero.component';

export default {
  title: 'Components/Hero',
  component: HeroComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Hero = Template.bind({});
Hero.args = {};
