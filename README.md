# Angular Interview Homework

This is a sample todo Angular application.  It is incomplete but has a list of tasks to complete in order to finish it.  Tasks are focused on gaging understanding of reactive programming concepts, Angular dependency injection, lazy loaded source code modules, Angular directives, Angular Reactive Forms, some other core Angular skills.  Completing most of the tasks show a moderate level understanding of core Angular concepts.

Pick 6 out of the 9 tasks to try and complete.  If any single task takes too long to solve according to the requirements, try to implement it with any solution you know how.

## My Todo’s
This application allows a user to input todos and save them to a list view, persisted through the browser’s localStorage.  It already contains a TodoDataService that stubs asynchronous requests and returns data from localStorage instead of remote data.  It also contains an AppState service as well as an AppFacade to facilitate some of the component/service interactions.

### Task 1: Shared Components
Tucker didn't finish the todo list display view before he left for vacation.  The todo-list landing page is still not showing all available information for its todos as it's clearly designed in the mockups.  Create and use a shared component to display all relevant info for a todo object.

> Requirements:
> 
> Create a shared Angular module that can be used anywhere in the application.
> 
> Create the TodoDetailsComponent for displaying todo info and make it available through the shared module.
> 
> Implement this component in the TodoListComponent view so that the todo list shows more info.

> Research:
> 
> [Angular Component Basics](https://angular.io/guide/component-overview)
> 
> [Angular Module Organization](https://angular.io/guide/module-types)

### Task 2: Asynchronous Bootstrapping
Tucker also didn't think this app would ever get deployed, so he didn't bother to make sure his team's platform configurations for the Todo app were being loaded properly.  We need to get application configurations before letting Angular proceed with any application code.

> Requirements:
>
> Have the application wait for a response from the asynchronous `ConfigService.fetchConfigs()` method before loading application systems.

> Consider this: A console.log() is placed in the `ConfigService.fetchConfigs()` method as well as in the `AppComponent`'s constructor to show the application's sequence of bootstrapping in the console.  Initially, you will notice the config fetch happening after the `AppComponent` constructs.  After implementing this though, you should see the asynchronous config fetch logging out into the console before the `AppComponent` construction happens.

> Research:
> 
> [APP_INITIALIZER](https://angular.io/api/core/APP_INITIALIZER)
> 
> [Angular Dependency Injection Providers](https://angular.io/guide/dependency-injection-providers)


### Task 3: Route Guarding
Jake has been on the team for a while, but our product owner Karen didn't inform him that this application was being built for the NSA.  Jake's authentication check in the AppComponent constructor is okay, but we'd prefer that the authentication were done through Angular's CanActivate guards so that immediate action can be taken to boot perpetrators before any faulty feature code has the chance to let a snooper through.  Also this will prevent the application ShellComponent from even loading if a user is not authenticated.  As it is now, an unauthenticated user will see the application shell for a moment, then get booted out once the authentication response is received.

> Requirements:
>
> Create service which implements CanActivate and use it on the application route for the ShellComponent's canActivate guards.
> 
> Remove the original authentication logic in the AppComponent and verify that the ShellComponent will now not load if your AuthGuard finds that the user's authentication result has a `false` value.

> Research:
>
> [Angular CanActivate Guards](https://angular.io/api/router/CanActivate)

### Task 4: Reactive Programming
Devon joined the team straight out of elementary school and didn't stay long enough to get very familiar with RxJS and reactive programming in general before deciding to leave to finish high school.  This showed in his work on the TodoListComponent where he is mis-using event streams from the AppState service by setting component properties with imperative constructs.

> Requirements:
>
> Identify where Devon is misusing Observable streams in the TodoListComponent and refactor the component properties so that the component template can react to state data streams without any imperative operations or subscribe statements being used in the component for data transformation.

> Research:
>
> [RxJS Stream Transformations](https://www.learnrxjs.io/learn-rxjs/concepts/get-started-transforming)
>
> [Common RxJS Mistakes](https://blog.bitsrc.io/5-common-mistakes-with-rxjs-1b09d4c19387)
>
> [Angular Async Template Pipe](https://angular.io/api/common/AsyncPipe)

### Task 5: Lazy loaded source code
Sammy quit on day 1 after submitting his application for unemployment benefits, so he didn't even start on the planned feature module optimizations.  Since the AddTodoModule is not part of the landing screen page, we want to lazy-load it so that it doesn't bog down the browser with extra source code until it's needed.

> Requirements:
>
> Convert the AddTodoModule feature module into a child routed module.  Configure the existing route to the Add Todo component to instead be a lazy route for the updated AddTodoModule.

> Research:
>
> [Lazy Loading Modules in Angular](https://angular.io/guide/lazy-loading-ngmodules)

### Task 6: Forms
Karen told the NSA deputy director that the NSA agents would be able to add their top-secret spy todo's as needed instead of having our team support do bulk uploads of their OCR scanned notepad todo lists.

> Requirements:
>
> Use an Angular Reactive form in the AddTodoComponent to collect input values on only the `$.title`, `$.description`, `$.assignee` properties of a todo with each input being a basic text input.
> 
> Add required validators to the title and description and an email validator to the assignee input.
> 
> Modify the `AddTodoComponent.addTodo()` method to use the form values to create a new todo (with other todo values set to some default) using the `TodoDataService.saveTodo()` method.
> 
> Verify that the new todo shows up when you navigate back to the landing page.

> Consider This: There's no need to display the errors in the template, but the todo should not be added if the inputs are invalid.

> Research:
>
> [Angular Reactive Forms](https://angular.io/guide/reactive-forms)
> 
> [Angular Validators](https://angular.io/api/forms/Validators)
>

### Task 7: Directives
The CTO is scheduled to visit our pod for a deep dive on our web app technologies for an upcoming press release he's really pumped about.  Tech Lead says he wants us to clean up our messy CSS and try to make some of it configurable using Angular directives.

> Requirements:
> Create a shared ButtonDirective that applies some of the styles used on the "Clear Todos" and "Save" buttons to whatever host element it is added to.  Then attach it to those button elements and remove some of the CSS that was previously needed for the styling.
> 
> Make one of these styles on the directive configurable with a directive input.

> Research:
>
> [Angular Directives](https://angular.io/guide/attribute-directives)
>
> [Binding Host Attributes](https://angular.io/guide/attribute-binding) using [@HostBinding property decorator](https://angular.io/api/core/HostBinding)


### Task 8: Loading indicators
Our business partner Tuck beamed into our team demo meeting last week from a location with less than stellar internet speed.  As he followed along with our Todo app demo, he kept thinking the app had frozen whenever he would clear the todos or add a new one.  We should add some sort of loading indication for visual feedback while the TodoDataService is fetching the todos.

> Requirements:
> Make use of the FacadeService's centralized handling of the todos loading logic as well as its access to the AppState, and refactor `loadTodos` to set a state property that will trigger some sort of global loading indicator in the ShellComponent for the application as it fetches todos.

> Consider this: The indicator can be anything, placed anywhere, but should show anytime todos are being loaded and hide after they finish loading. 


### Task 9: View Encapsulation
Our intern Billy got an urgent support request in at 2 AM and after starting a group facetime with the whole team, it's been decided that we'll push a known quick fix for the issue tonight and find a better solution later this week.  One of our users, Jenkins, is colorblind and cannot clearly read the text on the `<app-sample-third-party-component>` display in the TodoListComponent.  Jenkins also happens to have been on an embedded assignment to uncover a secret nuclear missile silo in enemy territory making this user's todo list even more critically urgent.  As much as we hate to do it, we're going to override the third party component's internal styles by modifying the TodoListComponent's ViewEncapsulation.

> Requirements:
> 
> Uncomment the hideous `app-sample-third-party-component` element in the TodoListComponent and modify the TodoListComponent's ViewEncapsulation so that you can set styles in the TodoListComponent's stylesheet to target and override the '.nifty' class on the SampleThirdPartyComponent to have a black background-color and white color property.

> Consider this: We could accomplish this using a global style in the main app styles.scss file, but the point is to keep these override styles in the component style file that is needing the override to happen for clear style organization, hence needing to modify ViewEncapsulation for the TodoListComponent rather than using the application global styles sheet.  Note that after modifying ViewEncapsulation, some existing Angular specific CSS selectors being used may no longer function and would need to be altered to target their expected elements.

> Research:
>
> [Angular View Encapsulation](https://angular.io/guide/view-encapsulation)
>
> [Angular Component Styles](https://angular.io/guide/component-styles)
