# Favorite Github users

A mobile app made with react-native to manage a list of favorite users and allow to browse in tis starred repos.

**Note:** this was tested only on Android. Don't know if it will work properly on IOs.

# Features

## Add your favorite users to a listing
This will store the users in the device storage.

![Users](images/users.jpg)

## Browse your favorite user starred repos
See all the repos that your favorite user follows.
![Profile](images/profile.jpg)

# Quick start

1. Clone the repo
````sh
git clone git@github.com:Artenes/rocketseat-bootcamp-githubusers.git
````

2. Enter in directory
````sh
cd rocketseat-bootcamp-githubusers.git
````

3. Install dependecies
````sh
yarn
````

4. Have an Android emulator running or device connect via USB.

5. If working with android redirect tcp ports (this app is configured with [reactotron](https://github.com/infinitered/reactotron))
````sh
adb reverse tcp:9090 tcp:9090
````

6. Start application
````sh
npx react-native run-android
````

In consecutive calls just run
````sh
npx react-native start
````

And in any case where an nonsen error message appears, close the app in the device and run
````sh
npx react-native start --reset-cache
````
