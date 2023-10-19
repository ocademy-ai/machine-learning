const getTag = /* GraphQL */ `
  query GetTag($id: ID!) {
    getTag(id: $id) {
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
const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncTags = /* GraphQL */ `
  query SyncTags(
    $filter: ModelTagFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getVisualization = /* GraphQL */ `
  query GetVisualization($id: ID!) {
    getVisualization(id: $id) {
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
const listVisualizations = /* GraphQL */ `
  query ListVisualizations(
    $filter: ModelVisualizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisualizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncVisualizations = /* GraphQL */ `
  query SyncVisualizations(
    $filter: ModelVisualizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVisualizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const usersByUsername = /* GraphQL */ `
  query UsersByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
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
const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncConversations = /* GraphQL */ `
  query SyncConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        conversation {
          id
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
      nextToken
      startedAt
    }
  }
`;
const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        conversation {
          id
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
      nextToken
      startedAt
    }
  }
`;
const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getTutorial = /* GraphQL */ `
  query GetTutorial($id: ID!) {
    getTutorial(id: $id) {
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
const listTutorials = /* GraphQL */ `
  query ListTutorials(
    $filter: ModelTutorialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutorials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncTutorials = /* GraphQL */ `
  query SyncTutorials(
    $filter: ModelTutorialFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTutorials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getVisualizationTags = /* GraphQL */ `
  query GetVisualizationTags($id: ID!) {
    getVisualizationTags(id: $id) {
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
const listVisualizationTags = /* GraphQL */ `
  query ListVisualizationTags(
    $filter: ModelVisualizationTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVisualizationTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        visualizationId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const syncVisualizationTags = /* GraphQL */ `
  query SyncVisualizationTags(
    $filter: ModelVisualizationTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVisualizationTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagId
        visualizationId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const visualizationTagsByTagId = /* GraphQL */ `
  query VisualizationTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisualizationTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visualizationTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        visualizationId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const visualizationTagsByVisualizationId = /* GraphQL */ `
  query VisualizationTagsByVisualizationId(
    $visualizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVisualizationTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    visualizationTagsByVisualizationId(
      visualizationId: $visualizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        visualizationId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const getProjectTags = /* GraphQL */ `
  query GetProjectTags($id: ID!) {
    getProjectTags(id: $id) {
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
const listProjectTags = /* GraphQL */ `
  query ListProjectTags(
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagId
        projectId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const syncProjectTags = /* GraphQL */ `
  query SyncProjectTags(
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjectTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagId
        projectId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const projectTagsByTagId = /* GraphQL */ `
  query ProjectTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        projectId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const projectTagsByProjectId = /* GraphQL */ `
  query ProjectTagsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectTagsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        projectId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const getCourseTags = /* GraphQL */ `
  query GetCourseTags($id: ID!) {
    getCourseTags(id: $id) {
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
const listCourseTags = /* GraphQL */ `
  query ListCourseTags(
    $filter: ModelCourseTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagId
        courseId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const syncCourseTags = /* GraphQL */ `
  query SyncCourseTags(
    $filter: ModelCourseTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagId
        courseId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const courseTagsByTagId = /* GraphQL */ `
  query CourseTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        courseId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const courseTagsByCourseId = /* GraphQL */ `
  query CourseTagsByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseTagsByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        courseId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const getTutorialTags = /* GraphQL */ `
  query GetTutorialTags($id: ID!) {
    getTutorialTags(id: $id) {
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
const listTutorialTags = /* GraphQL */ `
  query ListTutorialTags(
    $filter: ModelTutorialTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTutorialTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagId
        tutorialId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const syncTutorialTags = /* GraphQL */ `
  query SyncTutorialTags(
    $filter: ModelTutorialTagsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTutorialTags(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        tagId
        tutorialId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const tutorialTagsByTagId = /* GraphQL */ `
  query TutorialTagsByTagId(
    $tagId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTutorialTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tutorialTagsByTagId(
      tagId: $tagId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        tutorialId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const tutorialTagsByTutorialId = /* GraphQL */ `
  query TutorialTagsByTutorialId(
    $tutorialId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTutorialTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tutorialTagsByTutorialId(
      tutorialId: $tutorialId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tagId
        tutorialId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
const getUserVisualizations = /* GraphQL */ `
  query GetUserVisualizations($id: ID!) {
    getUserVisualizations(id: $id) {
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
const listUserVisualizations = /* GraphQL */ `
  query ListUserVisualizations(
    $filter: ModelUserVisualizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserVisualizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        visualizationId
        userId
        visualization {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const syncUserVisualizations = /* GraphQL */ `
  query SyncUserVisualizations(
    $filter: ModelUserVisualizationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserVisualizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        visualizationId
        userId
        visualization {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const userVisualizationsByVisualizationId = /* GraphQL */ `
  query UserVisualizationsByVisualizationId(
    $visualizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserVisualizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userVisualizationsByVisualizationId(
      visualizationId: $visualizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        visualizationId
        userId
        visualization {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const userVisualizationsByUserId = /* GraphQL */ `
  query UserVisualizationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserVisualizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userVisualizationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        visualizationId
        userId
        visualization {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const getUserProjects = /* GraphQL */ `
  query GetUserProjects($id: ID!) {
    getUserProjects(id: $id) {
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
const listUserProjects = /* GraphQL */ `
  query ListUserProjects(
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        userId
        project {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const syncUserProjects = /* GraphQL */ `
  query SyncUserProjects(
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectId
        userId
        project {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const userProjectsByProjectId = /* GraphQL */ `
  query UserProjectsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProjectsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        userId
        project {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const userProjectsByUserId = /* GraphQL */ `
  query UserProjectsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserProjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userProjectsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectId
        userId
        project {
          id
          name
          description
          platform
          source
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
      nextToken
      startedAt
    }
  }
`;
const getUserConversations = /* GraphQL */ `
  query GetUserConversations($id: ID!) {
    getUserConversations(id: $id) {
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
const listUserConversations = /* GraphQL */ `
  query ListUserConversations(
    $filter: ModelUserConversationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        conversation {
          id
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
      nextToken
      startedAt
    }
  }
`;
const syncUserConversations = /* GraphQL */ `
  query SyncUserConversations(
    $filter: ModelUserConversationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        conversation {
          id
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
      nextToken
      startedAt
    }
  }
`;
const userConversationsByUserId = /* GraphQL */ `
  query UserConversationsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserConversationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userConversationsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        conversation {
          id
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
      nextToken
      startedAt
    }
  }
`;
const userConversationsByConversationId = /* GraphQL */ `
  query UserConversationsByConversationId(
    $conversationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserConversationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userConversationsByConversationId(
      conversationId: $conversationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        conversation {
          id
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
      nextToken
      startedAt
    }
  }
`;
const getUserCourses = /* GraphQL */ `
  query GetUserCourses($id: ID!) {
    getUserCourses(id: $id) {
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
const listUserCourses = /* GraphQL */ `
  query ListUserCourses(
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncUserCourses = /* GraphQL */ `
  query SyncUserCourses(
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const userCoursesByUserId = /* GraphQL */ `
  query UserCoursesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCoursesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const userCoursesByCourseId = /* GraphQL */ `
  query UserCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserCoursesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getUserTutorials = /* GraphQL */ `
  query GetUserTutorials($id: ID!) {
    getUserTutorials(id: $id) {
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
const listUserTutorials = /* GraphQL */ `
  query ListUserTutorials(
    $filter: ModelUserTutorialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTutorials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncUserTutorials = /* GraphQL */ `
  query SyncUserTutorials(
    $filter: ModelUserTutorialsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserTutorials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const userTutorialsByUserId = /* GraphQL */ `
  query UserTutorialsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTutorialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userTutorialsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const userTutorialsByTutorialId = /* GraphQL */ `
  query UserTutorialsByTutorialId(
    $tutorialId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserTutorialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userTutorialsByTutorialId(
      tutorialId: $tutorialId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getCourseOrganizations = /* GraphQL */ `
  query GetCourseOrganizations($id: ID!) {
    getCourseOrganizations(id: $id) {
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
const listCourseOrganizations = /* GraphQL */ `
  query ListCourseOrganizations(
    $filter: ModelCourseOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const syncCourseOrganizations = /* GraphQL */ `
  query SyncCourseOrganizations(
    $filter: ModelCourseOrganizationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const courseOrganizationsByCourseId = /* GraphQL */ `
  query CourseOrganizationsByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseOrganizationsByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const courseOrganizationsByOrganizationId = /* GraphQL */ `
  query CourseOrganizationsByOrganizationId(
    $organizationId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseOrganizationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseOrganizationsByOrganizationId(
      organizationId: $organizationId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
const getUserTags = /* GraphQL */ `
  query GetUserTags($id: ID!) {
    getUserTags(id: $id) {
      id
      tagId
      userId
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
        organizations {
          nextToken
          startedAt
        }
        tags {
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
const listUserTags = /* GraphQL */ `
  query ListUserTags(
    $filter: ModelUserTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tagId
        userId
        tag {
          id
          name
          description
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
      nextToken
      startedAt
    }
  }
`;
module.exports = {
  listConversations,
  listCourseOrganizations,
  listCourseTags,
  listCourses,
  listMessages,
  listOrganizations,
  listProjectTags,
  listProjects,
  listTags,
  listUserConversations,
  listUserCourses,
  listUserProjects,
  listUserVisualizations,
  listUsers,
  listVisualizationTags,
  listVisualizations,
  listTutorials,
  listTutorialTags,
  listUserTutorials,
  listUserTags,
  getCourse,
  getConversation,
  getCourseOrganizations,
  getCourseTags,
  getMessage,
  getOrganization,
  getProject,
  getProjectTags,
  getTag,
  getUser,
  getUserConversations,
  getUserCourses,
  getUserProjects,
  getUserVisualizations,
  getVisualization,
  getVisualizationTags,
  getTutorial,
  getTutorialTags,
  getUserTutorials,
  getUserTags,
};