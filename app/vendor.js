myCVApp.controller('mainController', function ($scope, $state, $stateParams, $mdDialog, $mdToast, $mdSidenav) {
  var vm = this;
  vm.init = init;
  vm.toggleSidenav = toggleSidenav;
  vm.changeInfoToShow = changeInfoToShow;
  vm.itemMouseDown = itemMouseDown;
  vm.widthHeaderItem = {
    "width": "110px",
    "font-weight": "normal"
  };
  var allInfo = [];
  function init() {
    var infoAboutMe = [
      {
        icon: 'info_outline',
        header: 'Full name:',
        content: 'Rim Thanh Tran'
      },
      {
        icon: 'info_outline',
        header: 'DoB:',
        content: '04/20/1995'
      },
      {
        icon: 'bookmark_border',
        header: 'University:',
        content: 'University of Science 2013 - 2017'
      },
      {
        icon: 'bookmark_border',
        header: 'Major:',
        content: 'Software Engineering'
      },
      {
        icon: 'bookmark_border',
        header: 'GPA:',
        content: '7.77'
      },
      {
        icon: 'grade',
        header: 'Experience:',
        content: '3 months Internship and 9 months Trainee in Software Development at Global Cybersoft',
      }

    ];
    var infoKnowledge = [
      {
        icon: 'mode_edit',
        header: 'Programming Languages:',
        content: 'Java, HTML, CSS, Javascript, C/C++, C#'
      },
      {
        icon: 'mode_edit',
        header: 'Technology:',
        content: 'AngularJS, AngularJS Material, SASS, Spring Boot, Nodejs, Gulp, Docker, Nginx, Xamarin, SignalR, .NET'
      },
      {
        icon: 'mode_edit',
        header: 'Databases:',
        content: 'MS SQL server, My SQL, PostgreSQL, MDX Query'
      },
      {
        icon: 'mode_edit',
        header: 'OS:',
        content: 'Window, Oracle Linux Server'
      },
      {
        icon: 'mode_edit',
        header: 'BI:',
        content: 'Pentaho Business Analytics, Pentaho Data Integration'
      },
      {
        icon: 'mode_edit',
        header: 'Languages:',
        content: 'English intermediate level, Japanese basic level'
      },
      {
        icon: 'mode_edit',
        header: 'Other Skills:',
        content: 'Communication, teamwork, work with high pressure, calm in any case'
      }
    ];
    var infoExperience = [
      {
        icon: '',
        header: 'Projects at Global Cybersoft',
        content: '',
      },
      {
        icon: 'grade',
        header: 'Earned Value Management',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'Earn Value Management is an Analysis Web Application system. This system extracts project information from Excel files (based on company template) then it stored project information into database by time series. The Project Manager/Team Leader or Higher Manager can view report by time series data'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '1'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer, Tester, Deployment'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'Pentaho Business Analytics, Pentaho Data Integration, HTML5, AngularJS, AngularJS Material, SASS, Spring Boot, Gulp, Docker, Nginx'
          },
          {
            icon: 'details',
            header: 'Duration:',
            content: '7 months'
          }
        ]
      },
      {
        icon: 'grade',
        header: 'Virdict',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'Virdict is an United Kingdom Railway automation and control System'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '50+'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'HTML5, AngularJS, AngularJS Material, Bootstrap, Spring Boot'
          },
          {
            icon: 'details',
            header: 'Duration:',
            content: '2 months'
          }
        ]
      },
      {
        icon: 'grade',
        header: 'Railway SCADA Mobile',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'Railway SCADA Mobile is an mobile application show Alarms list and Equipments status in realtime'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '5'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer, Tester, Deployment'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'Xamarin, SignalR'
          },
          {
            icon: 'details',
            header: 'Duration:',
            content: '4 months'
          }
        ]
      },
      {
        icon: 'null',
        header: '',
        content: ''
      },
      {
        icon: '',
        header: 'Projects at University',
        content: '',
      },
      {
        icon: 'grade',
        header: 'Ho Chi Minh TripAdvisor',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'Ho Chi Minh TripAdvisor is an Android application provides information to foreign tourists about places, restaurants, hotels, food in Ho Chi Minh city. Besides, this app also gets user’s current location and gives them information about nearest places.'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '3'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer, Tester, Deployment'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'Android, Nodejs, Heroku'
          }
        ]
      },
      {
        icon: 'grade',
        header: 'Movie ticket booking web application',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'Movie ticket booking web application is a web application allows users to book movie ticket.'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '3'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer, Tester, Deployment'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'HTML5, CSS3, AngularJS, AngularJS Material, Nodejs, Heroku'
          }
        ]
      },
      {
        icon: 'grade',
        header: 'My Paint',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'My Paint is an Window application likes Microsoft Paint and extends a few more features'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '1'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer, Tester'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'WPF'
          }
        ]
      },
      {
        icon: 'grade',
        header: 'Library Management',
        content: '',
        childList: [
          {
            icon: 'details',
            header: 'Description:',
            content: 'Library Management is an Window application allows user manage library'
          },
          {
            icon: 'details',
            header: 'Team Size:',
            content: '2'
          },
          {
            icon: 'details',
            header: 'Role(s):',
            content: 'Developer, Tester'
          },
          {
            icon: 'details',
            header: 'Skills:',
            content: 'Winforms'
          }
        ]
      },
    ];
    var infoContact = [
      {
        icon: 'call',
        header: 'Phone:',
        content: '+84 988 617 518'
      },
      {
        icon: 'mail_outline',
        header: 'Gmail:',
        content: 'tranthanhrim1995@gmail.com'
      }
    ];
    allInfo.push(infoAboutMe);
    allInfo.push(infoKnowledge);
    allInfo.push(infoExperience);
    allInfo.push(infoContact);
    vm.menu = [
      {
        link: 'main',
        title: 'About me',
        icon: 'assignment_ind'
      },
      {
        link: 'knowledge',
        title: 'Knowledge',
        icon: 'mode_edit'
      },
      {
        link: 'experience',
        title: 'Experience',
        icon: 'grade'
      },
      {
        link: 'contact',
        title: 'Contact',
        icon: 'call'
      }
    ];
    vm.title = vm.menu[0].title;
    vm.infoToShow = allInfo[0];
  }

  function toggleSidenav(menuId) {
    $mdSidenav(menuId).toggle();
  }

  function changeInfoToShow(key) {
    var index = vm.menu.map(function (item) { return item.link }).indexOf(key);
    vm.widthHeaderItem.width = (index == 2 ? "330px" : (index == 3 ? '60px' : "110px"));
    vm.widthHeaderItem["font-weight"] = (index == 2 ? "bold" : "normal");
    vm.title = vm.menu[index].title;
    vm.infoToShow = allInfo[index];
    $mdSidenav('left').toggle();
  }

  function itemMouseDown(event) {
    event.stopPropagation();
  }
});