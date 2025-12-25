--- MVC pattern ----
    Model: db and data logic
    View: user interface
    Controller: business logic(validation, authentication)

frontend -> api call at specified route -> controller for the route -> business logic if any -> using model it will interact with db -> another business logic if any -> output to the ui


