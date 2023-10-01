const createChatbotMessage = /* GraphQL */ `
  mutation CreateChatbotMessage($input: CreateChatbotMessageInput!) {
    createChatbotMessage(input: $input)
  }
`;
const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      name
      description
      visualizations {
        items {
          id
          tagId
          visualizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          tagId
          projectId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          tagId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tutorials {
        items {
          id
          tagId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      name
      description
      visualizations {
        items {
          id
          tagId
          visualizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          tagId
          projectId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          tagId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tutorials {
        items {
          id
          tagId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      name
      description
      visualizations {
        items {
          id
          tagId
          visualizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          tagId
          projectId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          tagId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tutorials {
        items {
          id
          tagId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createVisualization = /* GraphQL */ `
  mutation CreateVisualization(
    $input: CreateVisualizationInput!
    $condition: ModelVisualizationConditionInput
  ) {
    createVisualization(input: $input, condition: $condition) {
      id
      name
      description
      platform
      source
      tags {
        items {
          id
          tagId
          visualizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          visualizationId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateVisualization = /* GraphQL */ `
  mutation UpdateVisualization(
    $input: UpdateVisualizationInput!
    $condition: ModelVisualizationConditionInput
  ) {
    updateVisualization(input: $input, condition: $condition) {
      id
      name
      description
      platform
      source
      tags {
        items {
          id
          tagId
          visualizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          visualizationId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteVisualization = /* GraphQL */ `
  mutation DeleteVisualization(
    $input: DeleteVisualizationInput!
    $condition: ModelVisualizationConditionInput
  ) {
    deleteVisualization(input: $input, condition: $condition) {
      id
      name
      description
      platform
      source
      tags {
        items {
          id
          tagId
          visualizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          visualizationId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      name
      description
      platform
      source
      tags {
        items {
          id
          tagId
          projectId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      name
      description
      platform
      source
      tags {
        items {
          id
          tagId
          projectId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      name
      description
      platform
      source
      tags {
        items {
          id
          tagId
          projectId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      source
      title
      nickname
      portrait
      bio
      birth
      gender
      city
      profession
      username
      email
      phoneNumber
      authStatus
      type
      status
      isDeleted
      isBlocked
      visualizations {
        items {
          id
          visualizationId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tutorials {
        items {
          id
          userId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          message
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userMessagesId
          conversationMessagesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      source
      title
      nickname
      portrait
      bio
      birth
      gender
      city
      profession
      username
      email
      phoneNumber
      authStatus
      type
      status
      isDeleted
      isBlocked
      visualizations {
        items {
          id
          visualizationId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tutorials {
        items {
          id
          userId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          message
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userMessagesId
          conversationMessagesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      source
      title
      nickname
      portrait
      bio
      birth
      gender
      city
      profession
      username
      email
      phoneNumber
      authStatus
      type
      status
      isDeleted
      isBlocked
      visualizations {
        items {
          id
          visualizationId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      projects {
        items {
          id
          projectId
          userId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tutorials {
        items {
          id
          userId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          message
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userMessagesId
          conversationMessagesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          message
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userMessagesId
          conversationMessagesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          message
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userMessagesId
          conversationMessagesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          userId
          conversationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      messages {
        items {
          id
          message
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userMessagesId
          conversationMessagesId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversation {
        id
        users {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      message
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userMessagesId
      conversationMessagesId
      owner
    }
  }
`;
const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversation {
        id
        users {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      message
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userMessagesId
      conversationMessagesId
      owner
    }
  }
`;
const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversation {
        id
        users {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      message
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userMessagesId
      conversationMessagesId
      owner
    }
  }
`;
const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      title
      source
      description
      cover
      objectives
      syllabus
      price
      cost
      topic
      duration
      type
      hasCert
      language
      level
      license
      publishedAt
      organizations {
        items {
          id
          courseId
          organizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tagId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      title
      source
      description
      cover
      objectives
      syllabus
      price
      cost
      topic
      duration
      type
      hasCert
      language
      level
      license
      publishedAt
      organizations {
        items {
          id
          courseId
          organizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tagId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      title
      source
      description
      cover
      objectives
      syllabus
      price
      cost
      topic
      duration
      type
      hasCert
      language
      level
      license
      publishedAt
      organizations {
        items {
          id
          courseId
          organizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      tags {
        items {
          id
          tagId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          courseId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
      id
      name
      source
      description
      logo
      courses {
        items {
          id
          courseId
          organizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
      id
      name
      source
      description
      logo
      courses {
        items {
          id
          courseId
          organizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
      id
      name
      source
      description
      logo
      courses {
        items {
          id
          courseId
          organizationId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createTutorial = /* GraphQL */ `
  mutation CreateTutorial(
    $input: CreateTutorialInput!
    $condition: ModelTutorialConditionInput
  ) {
    createTutorial(input: $input, condition: $condition) {
      id
      title
      source
      description
      objectives
      syllabus
      price
      cost
      topic
      language
      level
      publishedAt
      prerequisites
      references
      tags {
        items {
          id
          tagId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateTutorial = /* GraphQL */ `
  mutation UpdateTutorial(
    $input: UpdateTutorialInput!
    $condition: ModelTutorialConditionInput
  ) {
    updateTutorial(input: $input, condition: $condition) {
      id
      title
      source
      description
      objectives
      syllabus
      price
      cost
      topic
      language
      level
      publishedAt
      prerequisites
      references
      tags {
        items {
          id
          tagId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteTutorial = /* GraphQL */ `
  mutation DeleteTutorial(
    $input: DeleteTutorialInput!
    $condition: ModelTutorialConditionInput
  ) {
    deleteTutorial(input: $input, condition: $condition) {
      id
      title
      source
      description
      objectives
      syllabus
      price
      cost
      topic
      language
      level
      publishedAt
      prerequisites
      references
      tags {
        items {
          id
          tagId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userId
          tutorialId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createVisualizationTags = /* GraphQL */ `
  mutation CreateVisualizationTags(
    $input: CreateVisualizationTagsInput!
    $condition: ModelVisualizationTagsConditionInput
  ) {
    createVisualizationTags(input: $input, condition: $condition) {
      id
      tagId
      visualizationId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      visualization {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateVisualizationTags = /* GraphQL */ `
  mutation UpdateVisualizationTags(
    $input: UpdateVisualizationTagsInput!
    $condition: ModelVisualizationTagsConditionInput
  ) {
    updateVisualizationTags(input: $input, condition: $condition) {
      id
      tagId
      visualizationId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      visualization {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteVisualizationTags = /* GraphQL */ `
  mutation DeleteVisualizationTags(
    $input: DeleteVisualizationTagsInput!
    $condition: ModelVisualizationTagsConditionInput
  ) {
    deleteVisualizationTags(input: $input, condition: $condition) {
      id
      tagId
      visualizationId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      visualization {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createProjectTags = /* GraphQL */ `
  mutation CreateProjectTags(
    $input: CreateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    createProjectTags(input: $input, condition: $condition) {
      id
      tagId
      projectId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      project {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateProjectTags = /* GraphQL */ `
  mutation UpdateProjectTags(
    $input: UpdateProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    updateProjectTags(input: $input, condition: $condition) {
      id
      tagId
      projectId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      project {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteProjectTags = /* GraphQL */ `
  mutation DeleteProjectTags(
    $input: DeleteProjectTagsInput!
    $condition: ModelProjectTagsConditionInput
  ) {
    deleteProjectTags(input: $input, condition: $condition) {
      id
      tagId
      projectId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      project {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createCourseTags = /* GraphQL */ `
  mutation CreateCourseTags(
    $input: CreateCourseTagsInput!
    $condition: ModelCourseTagsConditionInput
  ) {
    createCourseTags(input: $input, condition: $condition) {
      id
      tagId
      courseId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateCourseTags = /* GraphQL */ `
  mutation UpdateCourseTags(
    $input: UpdateCourseTagsInput!
    $condition: ModelCourseTagsConditionInput
  ) {
    updateCourseTags(input: $input, condition: $condition) {
      id
      tagId
      courseId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteCourseTags = /* GraphQL */ `
  mutation DeleteCourseTags(
    $input: DeleteCourseTagsInput!
    $condition: ModelCourseTagsConditionInput
  ) {
    deleteCourseTags(input: $input, condition: $condition) {
      id
      tagId
      courseId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createTutorialTags = /* GraphQL */ `
  mutation CreateTutorialTags(
    $input: CreateTutorialTagsInput!
    $condition: ModelTutorialTagsConditionInput
  ) {
    createTutorialTags(input: $input, condition: $condition) {
      id
      tagId
      tutorialId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tutorial {
        id
        title
        source
        description
        objectives
        syllabus
        price
        cost
        topic
        language
        level
        publishedAt
        prerequisites
        references
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateTutorialTags = /* GraphQL */ `
  mutation UpdateTutorialTags(
    $input: UpdateTutorialTagsInput!
    $condition: ModelTutorialTagsConditionInput
  ) {
    updateTutorialTags(input: $input, condition: $condition) {
      id
      tagId
      tutorialId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tutorial {
        id
        title
        source
        description
        objectives
        syllabus
        price
        cost
        topic
        language
        level
        publishedAt
        prerequisites
        references
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteTutorialTags = /* GraphQL */ `
  mutation DeleteTutorialTags(
    $input: DeleteTutorialTagsInput!
    $condition: ModelTutorialTagsConditionInput
  ) {
    deleteTutorialTags(input: $input, condition: $condition) {
      id
      tagId
      tutorialId
      tag {
        id
        name
        description
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tutorial {
        id
        title
        source
        description
        objectives
        syllabus
        price
        cost
        topic
        language
        level
        publishedAt
        prerequisites
        references
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createUserVisualizations = /* GraphQL */ `
  mutation CreateUserVisualizations(
    $input: CreateUserVisualizationsInput!
    $condition: ModelUserVisualizationsConditionInput
  ) {
    createUserVisualizations(input: $input, condition: $condition) {
      id
      visualizationId
      userId
      visualization {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateUserVisualizations = /* GraphQL */ `
  mutation UpdateUserVisualizations(
    $input: UpdateUserVisualizationsInput!
    $condition: ModelUserVisualizationsConditionInput
  ) {
    updateUserVisualizations(input: $input, condition: $condition) {
      id
      visualizationId
      userId
      visualization {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteUserVisualizations = /* GraphQL */ `
  mutation DeleteUserVisualizations(
    $input: DeleteUserVisualizationsInput!
    $condition: ModelUserVisualizationsConditionInput
  ) {
    deleteUserVisualizations(input: $input, condition: $condition) {
      id
      visualizationId
      userId
      visualization {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createUserProjects = /* GraphQL */ `
  mutation CreateUserProjects(
    $input: CreateUserProjectsInput!
    $condition: ModelUserProjectsConditionInput
  ) {
    createUserProjects(input: $input, condition: $condition) {
      id
      projectId
      userId
      project {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateUserProjects = /* GraphQL */ `
  mutation UpdateUserProjects(
    $input: UpdateUserProjectsInput!
    $condition: ModelUserProjectsConditionInput
  ) {
    updateUserProjects(input: $input, condition: $condition) {
      id
      projectId
      userId
      project {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteUserProjects = /* GraphQL */ `
  mutation DeleteUserProjects(
    $input: DeleteUserProjectsInput!
    $condition: ModelUserProjectsConditionInput
  ) {
    deleteUserProjects(input: $input, condition: $condition) {
      id
      projectId
      userId
      project {
        id
        name
        description
        platform
        source
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createUserConversations = /* GraphQL */ `
  mutation CreateUserConversations(
    $input: CreateUserConversationsInput!
    $condition: ModelUserConversationsConditionInput
  ) {
    createUserConversations(input: $input, condition: $condition) {
      id
      userId
      conversationId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversation {
        id
        users {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateUserConversations = /* GraphQL */ `
  mutation UpdateUserConversations(
    $input: UpdateUserConversationsInput!
    $condition: ModelUserConversationsConditionInput
  ) {
    updateUserConversations(input: $input, condition: $condition) {
      id
      userId
      conversationId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversation {
        id
        users {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteUserConversations = /* GraphQL */ `
  mutation DeleteUserConversations(
    $input: DeleteUserConversationsInput!
    $condition: ModelUserConversationsConditionInput
  ) {
    deleteUserConversations(input: $input, condition: $condition) {
      id
      userId
      conversationId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      conversation {
        id
        users {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createUserCourses = /* GraphQL */ `
  mutation CreateUserCourses(
    $input: CreateUserCoursesInput!
    $condition: ModelUserCoursesConditionInput
  ) {
    createUserCourses(input: $input, condition: $condition) {
      id
      userId
      courseId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateUserCourses = /* GraphQL */ `
  mutation UpdateUserCourses(
    $input: UpdateUserCoursesInput!
    $condition: ModelUserCoursesConditionInput
  ) {
    updateUserCourses(input: $input, condition: $condition) {
      id
      userId
      courseId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteUserCourses = /* GraphQL */ `
  mutation DeleteUserCourses(
    $input: DeleteUserCoursesInput!
    $condition: ModelUserCoursesConditionInput
  ) {
    deleteUserCourses(input: $input, condition: $condition) {
      id
      userId
      courseId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createUserTutorials = /* GraphQL */ `
  mutation CreateUserTutorials(
    $input: CreateUserTutorialsInput!
    $condition: ModelUserTutorialsConditionInput
  ) {
    createUserTutorials(input: $input, condition: $condition) {
      id
      userId
      tutorialId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tutorial {
        id
        title
        source
        description
        objectives
        syllabus
        price
        cost
        topic
        language
        level
        publishedAt
        prerequisites
        references
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateUserTutorials = /* GraphQL */ `
  mutation UpdateUserTutorials(
    $input: UpdateUserTutorialsInput!
    $condition: ModelUserTutorialsConditionInput
  ) {
    updateUserTutorials(input: $input, condition: $condition) {
      id
      userId
      tutorialId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tutorial {
        id
        title
        source
        description
        objectives
        syllabus
        price
        cost
        topic
        language
        level
        publishedAt
        prerequisites
        references
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteUserTutorials = /* GraphQL */ `
  mutation DeleteUserTutorials(
    $input: DeleteUserTutorialsInput!
    $condition: ModelUserTutorialsConditionInput
  ) {
    deleteUserTutorials(input: $input, condition: $condition) {
      id
      userId
      tutorialId
      user {
        id
        name
        source
        title
        nickname
        portrait
        bio
        birth
        gender
        city
        profession
        username
        email
        phoneNumber
        authStatus
        type
        status
        isDeleted
        isBlocked
        visualizations {
          nextToken
          startedAt
        }
        projects {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        tutorials {
          nextToken
          startedAt
        }
        messages {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      tutorial {
        id
        title
        source
        description
        objectives
        syllabus
        price
        cost
        topic
        language
        level
        publishedAt
        prerequisites
        references
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const createCourseOrganizations = /* GraphQL */ `
  mutation CreateCourseOrganizations(
    $input: CreateCourseOrganizationsInput!
    $condition: ModelCourseOrganizationsConditionInput
  ) {
    createCourseOrganizations(input: $input, condition: $condition) {
      id
      courseId
      organizationId
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      organization {
        id
        name
        source
        description
        logo
        courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const updateCourseOrganizations = /* GraphQL */ `
  mutation UpdateCourseOrganizations(
    $input: UpdateCourseOrganizationsInput!
    $condition: ModelCourseOrganizationsConditionInput
  ) {
    updateCourseOrganizations(input: $input, condition: $condition) {
      id
      courseId
      organizationId
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      organization {
        id
        name
        source
        description
        logo
        courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
const deleteCourseOrganizations = /* GraphQL */ `
  mutation DeleteCourseOrganizations(
    $input: DeleteCourseOrganizationsInput!
    $condition: ModelCourseOrganizationsConditionInput
  ) {
    deleteCourseOrganizations(input: $input, condition: $condition) {
      id
      courseId
      organizationId
      course {
        id
        title
        source
        description
        cover
        objectives
        syllabus
        price
        cost
        topic
        duration
        type
        hasCert
        language
        level
        license
        publishedAt
        organizations {
          nextToken
          startedAt
        }
        tags {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      organization {
        id
        name
        source
        description
        logo
        courses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
module.exports = {
  createTag,
  createConversation,
  createCourse,
  createCourseOrganizations,
  createCourseTags,
  createMessage,
  createOrganization,
  createProject,
  createProjectTags,
  createUser,
  createUserConversations,
  createUserCourses,
  createVisualization,
  createUserProjects,
  createUserVisualizations,
  createVisualizationTags,
  createTutorial,
  createTutorialTags,
  createUserTutorials,
  updateTag,
  updateConversation,
  updateCourse,
  updateCourseOrganizations,
  updateCourseTags,
  updateMessage,
  updateOrganization,
  updateProject,
  updateProjectTags,
  updateUser,
  updateUserConversations,
  updateUserCourses,
  updateVisualization,
  updateUserProjects,
  updateUserVisualizations,
  updateVisualizationTags,
  updateTutorial,
  updateTutorialTags,
  updateUserTutorials,
  deleteConversation,
  deleteCourse,
  deleteCourseOrganizations,
  deleteCourseTags,
  deleteMessage,
  deleteOrganization,
  deleteProject,
  deleteProjectTags,
  deleteTag,
  deleteUser,
  deleteUserConversations,
  deleteUserCourses,
  deleteUserProjects,
  deleteUserVisualizations,
  deleteVisualization,
  deleteVisualizationTags,
  deleteTutorial,
  deleteTutorialTags,
  deleteUserTutorials,
};