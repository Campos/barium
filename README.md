Barium
=============
Bare bones repository to get your meteor application up and running quickly.

Setup
-----------
CD to your projects directory root of choice - *( like /Users/Friend/Apps/ )* - then:
```
git clone https://github.com/Campos/barium.git new-project-name
```

CD to app folder and build:
```
cd app
npm start
```

Usage
-----------
To add this project to an existing, or different repository you'll want to delete the barium .git folder by simply...err deleting it.
Now initialize, add files, add origin, commit and finally push with:
```
git init
git add .
git commit -m 'initial commit.'
git remote add origin _git-repository-url_
git push -u origin master
```

And that should do it.
