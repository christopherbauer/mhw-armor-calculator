# mhw-armor-calculator

My first react app built out as an armor calculator for MHW. The purpose of this is to create a simple web server/database/api for requesting information about the available armor sets and suggesting sets based on the requirements of the current user (what HR, what items and monsters needed to farm and how to farm them, etc).

## Development Plan

- [ ] Web Tier
  - [x] Working Static Site for listing armor sets (No real design work yet)
  - [x] Get armor sets from API
  - [ ] Create a form for submitting the desired armor characteristics
    - [ ] Primary: Armor Set Skills
    - [ ] Maximize for: Slots/Augments/ETC
    - [ ] Suggest alternate armors if you have jewels that allow you be 'more permissive' of exchanging decorations
      * EX your primary armor set skill is Handicraft and one piece of armor has 1 handicraft but zero slots, but another has Critcial Eye and 2 slots, the calculator should suggest that you use the armor set that gets you a bonus slot as long as you have the decoration for it)
  - [ ] Create a form for user submitted armor sets
  - [ ] Create encoded share links for the application
- [ ] Database Tier
  - [x] Define core armor tables and relationships
  - [x] Define process for source controlled DBMS (sql server database project in VS professional)
    - [ ] Document process
  - [ ] Define advanced armor tables (decorations, augments)
  - [ ] Create insert scripts for armor sets
- [ ] Api Tier
  - [ ] Setup armors and GET
  - [ ] Setup decorations and GET
  - [ ] Setup augmentations and GET
  - [ ] Setup share link and GET (use API version in case this changes from outside world persepctive)

## Technologies Used

* Node.js (Package Manager)
* ReactJS (Web tier)
    * Less-watcher
* Sql Server Express (Data tier)
    * Visual Studio (Professional Edition) - For the database project, allowing me to source control the DB
* Node Server (Api)
    * Sequelize
    * Tedious
* Visual Studio Code
    * All core JS coding

## Contributing

I am happy to share development plans or 'farm out' a feature if anyone is interested in building out this project with me

## Community

I livestream the development process somewhat regularly on [Twitch as ThisIsCrispy](https://www.twitch.tv/thisiscrispy) however I am learning over 1/2 of the technologies used above and as such it may be slow going sometimes when I'm stuck on something (I think I lost an hour to the initial Sequelize/Tedious config!).
