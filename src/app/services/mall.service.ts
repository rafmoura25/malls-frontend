import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class MallService {
  constructor(private apollo: Apollo) {}

  getMalls() {
    return this.apollo.query({
      query: gql`
        query {
          malls {
            id
            name
            isActive
          }
        }
      `,
    });
  }

  createMall(name: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($name: String!) {
          createMall(name: $name) {
            id
            name
          }
        }
      `,
      variables: {
        name: name,
      },
    });
  }

  updateMall(id: string, name: string) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: ID!, $name: String!) {
          updateMall(id: $id, name: $name) {
            id
            name
          }
        }
      `,
      variables: {
        id: id,
        name: name,
      },
    });
  }

  toggleMallStatus(id: string, isActive: boolean) {
    return this.apollo.mutate({
      mutation: gql`
        mutation($id: ID!, $isActive: Boolean!) {
          toggleMallStatus(id: $id, isActive: $isActive) {
            id
            isActive
          }
        }
      `,
      variables: {
        id: id,
        isActive: isActive,
      },
    });
  }
}
