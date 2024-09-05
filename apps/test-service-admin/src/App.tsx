import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AttributeList } from "./attribute/AttributeList";
import { AttributeCreate } from "./attribute/AttributeCreate";
import { AttributeEdit } from "./attribute/AttributeEdit";
import { AttributeShow } from "./attribute/AttributeShow";
import { AttributeGroupList } from "./attributeGroup/AttributeGroupList";
import { AttributeGroupCreate } from "./attributeGroup/AttributeGroupCreate";
import { AttributeGroupEdit } from "./attributeGroup/AttributeGroupEdit";
import { AttributeGroupShow } from "./attributeGroup/AttributeGroupShow";
import { ItemTypeList } from "./itemType/ItemTypeList";
import { ItemTypeCreate } from "./itemType/ItemTypeCreate";
import { ItemTypeEdit } from "./itemType/ItemTypeEdit";
import { ItemTypeShow } from "./itemType/ItemTypeShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { ItemAttributeList } from "./itemAttribute/ItemAttributeList";
import { ItemAttributeCreate } from "./itemAttribute/ItemAttributeCreate";
import { ItemAttributeEdit } from "./itemAttribute/ItemAttributeEdit";
import { ItemAttributeShow } from "./itemAttribute/ItemAttributeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"item_service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Attribute"
          list={AttributeList}
          edit={AttributeEdit}
          create={AttributeCreate}
          show={AttributeShow}
        />
        <Resource
          name="AttributeGroup"
          list={AttributeGroupList}
          edit={AttributeGroupEdit}
          create={AttributeGroupCreate}
          show={AttributeGroupShow}
        />
        <Resource
          name="ItemType"
          list={ItemTypeList}
          edit={ItemTypeEdit}
          create={ItemTypeCreate}
          show={ItemTypeShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="ItemAttribute"
          list={ItemAttributeList}
          edit={ItemAttributeEdit}
          create={ItemAttributeCreate}
          show={ItemAttributeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
