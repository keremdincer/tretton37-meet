# [The fellowship of the tretton37](https://tretton37-meet.herokuapp.com/)

I've used React with TypeScript. Because I feel more comfortable with React on building a project which has user interactions. And TypeScript shortens the error handling and testing process a lot. Seeing errors or warning before running the application really speeds up development process.

## Story List
My priority was Functionality for this project. My previous experiences was mainly on functionality and clean design. So I tried to choose the stories which I felt more comfortable. I started by defining the basic layout and elements that will be needed. Then I connected the API with the given url and api key. Before each push I tested compatibility on IE11 (which helped me figure out the visual problems before I dive in other parts). I started with small components with helper components beside them. When a component size grew too much, I've extracted parts of it to a separate component.

### Design
- [x] Responsive design, works on mobile and tablets
- [x] No UI framework used (such as Bootstrap, Ant)

  I've used TailwindCSS and SCSS in my previous projects. So I'm confortable developing frontends without an actual UI framework. 
- I didn't have time to test __screen reader__ functionality, but I tried my best to keep things SR friendly.

### Functionality
- [x] Sort by name and office
- [x] Filter by name and office
- [x] (Only with API) Filter by contact links (such as Twitter or GitHub)
- [x] Enable switch between grid and a different view (such as list)
- [x] Only render a set of profiles using either infinity scroll, pagination or a load more button
- [x] Available on a free [public url](https://tretton37-meet.herokuapp.com/) (such as Azure, Heroku)

### Testing
- [x] Works in Chrome, Firefox, Edge
- [x] Works in IE11

  In my previous work environments, IE11 support was required for all the web application projects we had.
  (I've tested IE11 compatilibity on my local machine. After building project via ```yarn build``` project works IE11 as expected.) 

---

## To run the project
### 1. Install packages
```yarn``` or ```npm install```

### 2. Set env variables
Rename the .env.example file to .env and set variables in the file with corresponding values. (api url & api key)

### 3. Run project (For Development)
```yarn start``` or ```npm start```

### 4. Build project (Required for IE11)
```yarn build``` or ```npm run build```

### 5. Run project (For Production)
```yarn global add serve``` or ```npm install --global serve```
```serve -s build```
