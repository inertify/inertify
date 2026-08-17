---
seo:
  title: Headless packages for Laravel, Inertia, and Vue
  description: Inertify builds server-driven, completely headless packages for Laravel, Inertia, and Vue. Laravel owns schema, authorization, validation, and behavior while your application owns every rendered element.
---

::u-page-hero
#title
[Laravel]{.text-primary} owns behavior. :br Your app owns the [UI.]{.text-primary}

#description
Inertify is a family of headless, schema-driven packages for Laravel, Inertia, and Vue. :br Declare behavior once on the server, then render it with your own components and design system.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: "#packages"
  trailing-icon: i-lucide-arrow-down
  ---
  See the packages
  :::

#headline
  :::div{.flex.flex-col.items-center.gap-4}
    ::::u-button
    ---
    color: neutral
    icon: i-lucide-box
    size: sm
    to: "#packages"
    variant: outline
    ---
    Laravel + Inertia + Vue
    ::::
  :::
::

::u-page-section
---
id: packages
class: scroll-mt-24
---
#title
Three packages, one contract

#description
Every Inertify package serializes server-owned behavior into an Inertia property and hands it to a typed Vue engine. None of them ship CSS, a Tailwind preset, icons, or ready-made components.

#default
:package-grid
::

::u-page-section
---
id: form
class: scroll-mt-24
headline: Available today
---
#title
Inside [Inertify Form]{.text-primary}

#description
The first package covers the whole form lifecycle: schema, authorization, validation, binding, uploads, collections, and wizards. Two installs — a Laravel package and a Vue package — behind one form contract.

#default
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
    ```php [app/Forms/ProfileForm.php]
    final class ProfileForm extends Form
    {
        public function fields(): array
        {
            return [
                TextInput::make('name', 'Name')
                    ->required()
                    ->precognitive(),
                Combobox::make('skill', 'Primary skill')
                    ->source(route('skills.index'))
                    ->searchable(),
                File::make('avatar', 'Avatar')
                    ->image()
                    ->maxSize(5 * 1024),
                TextInput::make('company', 'Company')
                    ->visibleWhen('is_employed', true)
                    ->clearWhenHidden(),
            ];
        }
    }
    ```

    #title
    Schema lives in PHP

    #description
    Forms are container-resolved classes. Fields, rules, defaults, visibility, binding, routes, and upload behavior are declared once and serialized as functional metadata only.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-1.items-center.justify-center.py-12}
      :u-icon{name="i-lucide-list-tree" class="size-24 text-primary"}
      :::::

    #title
    A field for the job

    #description
    Text and structured input, choices, dates, colors and sliders, files, rich text, repeaters, typed blocks, key-value pairs, fieldsets, and submits.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-1.items-center.justify-center.py-12}
        ::::::div{.relative.flex.size-28.items-center.justify-center.rounded-full.bg-primary/10}
        :u-icon{name="i-lucide-shield-check" class="size-14 text-primary"}

          :::::::div{.absolute.-right-3.-top-2.flex.size-9.items-center.justify-center.rounded-full.border.border-default.bg-default.shadow-sm}
          :u-icon{name="i-lucide-check" class="size-4 text-primary"}
          :::::::
        ::::::
      :::::

    #title
    Authorization stays structural

    #description
    Unauthorized fields disappear from schema, initial data, and validation rules together instead of being hidden in the browser.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-1.items-center.justify-center.py-12}
      :u-icon{name="i-lucide-cloud-upload" class="size-24 text-primary"}
      :::::

    #title
    Uploads for real applications

    #description
    Native, temporary, resumable chunked, and direct-to-storage uploads, each resolved server-side and validated by Laravel.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-1.items-center.justify-center.py-12}
      :u-icon{name="i-lucide-workflow" class="size-24 text-primary"}
      :::::

    #title
    Collections and wizards

    #description
    Repeaters, typed blocks, and multi-step forms with stable nested paths, server-side step validation, and application-owned navigation.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    ---
    ```ts [resources/js/components/form/index.ts]
    export const { FormField, FormFields } = createFormRenderer({
        renderers: {
          Text: TextField,
          Checkbox: CheckboxField,
          File: FileField,
        },
    })
    ```

    #title
    Behavior without package markup

    #description
    The schema describes what a field does. Your application decides its HTML, components, layout, accessibility, and visual states — the Vue engine emits no elements of its own.
    ::::

    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    ---
      :::::div{.flex.flex-1.items-center.justify-center.py-12}
      :u-icon{name="i-lucide-braces" class="size-24 text-primary"}
      :::::

    #title
    Composables first

    #description
    Nested values and errors, dirty and touched state, debounced Precognition validation, conditional transitions, collection reordering, upload progress, and unsaved-navigation protection.
    ::::
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
  external: true
  icon: i-lucide-book-open
  size: xl
  to: /form/
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
