---
seo:
  title: Headless packages for Laravel, Inertia, and Vue
  description: Inertify builds server-driven, completely headless packages for Laravel, Inertia, and Vue. Laravel owns schema, authorization, validation, and behavior while your application owns every rendered element.
---

::u-page-hero
#top
:hero-background

#title
[Laravel]{.text-primary} owns behavior. :br [Your app owns the]{.text-muted} :underline-word[UI.]

#description
Inertify is a family of headless, schema-driven packages for Laravel, Inertia, and Vue. :br Declare behavior once on the server, then render it with your own components and design system.

#links
  :::u-button
  ---
  aria-label: See the packages
  class: animate-bounce motion-reduce:animate-none
  color: primary
  icon: i-lucide-arrow-down
  size: xl
  to: "#packages"
  ui:
    leadingIcon: size-8
  variant: ghost
  ---
  :::

#headline
  :::hero-eyebrow{to="https://github.com/inertify"}
  Open source · MIT licensed
  :::
::

<!-- ::u-page-section
---
id: packages
class: scroll-mt-24
---
#title
Three packages, one contract

#description
Every Inertify package serializes server-owned behavior into an Inertia property and hands it to a typed Vue engine. None of them ship CSS, a Tailwind preset, icons, or ready-made components.
:: -->

::package-rows
#form
  :::hero-form-showcase
  #php
  ```php
  <?php

  namespace App\Forms;

  use Inertify\Form\Fields\Checkbox;
  use Inertify\Form\Fields\Combobox;
  use Inertify\Form\Fields\Fieldset;
  use Inertify\Form\Fields\File;
  use Inertify\Form\Fields\Radio;
  use Inertify\Form\Fields\TextInput;
  use Inertify\Form\Fields\Toggle;
  use Inertify\Form\Form;

  final class ProfileForm extends Form
  {
      public function fields(): array
      {
          return [
              Fieldset::make()
                  ->id('main')
                  ->fields([
                      File::make('avatar', 'Avatar')
                          ->image()
                          ->maxSize(5 * 1024),
                      TextInput::make('name', 'Name')
                          ->required()
                          ->precognitive(),
                      TextInput::make('email', 'Email')
                          ->email()
                          ->required()
                          ->precognitive(),
                      Combobox::make('skill', 'Primary skill')
                          ->source(route('skills.index'))
                          ->searchable()
                          ->preload()
                          ->required(),
                      TextInput::make('company', 'Company')
                          ->visibleWhen('is_employed', true)
                          ->clearWhenHidden(),
                  ]),
              Fieldset::make()
                  ->id('extra')
                  ->fields([
                      Radio::make('work_mode', 'Preferred work mode')
                          ->options([
                              'remote' => 'Remote',
                              'hybrid' => 'Hybrid',
                              'office' => 'Office',
                          ])
                          ->default('remote'),
                      Checkbox::make('is_employed', 'Currently employed')
                          ->default(true),
                      Toggle::make('notifications', 'Project notifications')
                          ->default(true),
                  ]),
          ];
      }
  }
  ```

  #vue
  ```vue
  <script setup lang="ts">
  import {
    Form,
    FormFieldsets,
    FormSubmit,
    type FormResource,
  } from '@inertify/form-vue'
  import { FormField, FormFields } from '@/components/form'
  import Button from '@/components/ui/Button.vue'
  import Card from '@/components/ui/Card.vue'

  defineProps<{ form: FormResource }>()
  </script>

  <template>
    <Form :form="form" v-slot="{ form: api, processing, canSubmit }">
      <Card class="space-y-5">
        <FormField name="avatar" />

        <FormFieldsets v-slot="{ id, fieldset }">
            <section
              :class="id === 'main'
                ? 'grid gap-4 sm:grid-cols-2'
                : 'space-y-4'"
            >
              <FormFields
                :fieldset="fieldset"
                except="avatar"
              />
          </section>
        </FormFieldsets>

        <Button
          type="submit"
          :disabled="!canSubmit || processing"
        >
          {{ processing ? 'Saving…' : 'Save profile' }}
        </Button>
      </Card>
    </Form>
  </template>
  ```
  :::
::

::u-page-section
---
id: approach
class: scroll-mt-24
---
#title
Shared foundations

#description
The packages differ in scope, not in philosophy. Whatever ships next follows the same rules.

#features
  :::u-page-feature
  ---
  icon: i-lucide-square-dashed
  ---
  #title
  Headless by default

  #description
  No CSS, Tailwind preset, component library, editor, or icon set is shipped at runtime.
  :::

  :::u-page-feature
  ---
  icon: i-simple-icons-laravel
  ---
  #title
  Laravel-first

  #description
  Behavior is declared in container-resolved PHP classes with the framework APIs you already use.
  :::

  :::u-page-feature
  ---
  icon: i-simple-icons-inertia
  ---
  #title
  Inertia-native

  #description
  Resources pass straight through Inertia properties, including partial reloads and Precognition.
  :::

  :::u-page-feature
  ---
  icon: i-simple-icons-vuedotjs
  ---
  #title
  Typed Vue engines

  #description
  Every package pairs with a Vue 3.5 package built from composables and renderless components.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  Server-owned authorization

  #description
  What a user may see or change is decided in Laravel and reflected in the serialized resource.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-scale
  ---
  #title
  MIT licensed

  #description
  Independent, clean-room implementations released as open source under the MIT License.
  :::
::

::u-page-section
#title
[Ready]{.text-primary} to build?

#description
Inertify Form is the package you can install today. Table and Modal are still in design — follow the organization on GitHub to see them land.

#links
  :::u-button
  ---
  color: primary
  icon: i-lucide-book-open
  size: xl
  to: /form/getting-started/installation
  ---
  Read the documentation
  :::

  :::u-button
  ---
  color: neutral
  icon: i-lucide-users
  size: xl
  target: _blank
  to: https://github.com/inertify
  variant: outline
  ---
  Follow the organization
  :::
::
