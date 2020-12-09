import { render } from "@testing-library/react";
import React from "react";
import Source from "./Source.jsx";
import {BrowserRouter} from "react-router-dom";

describe("AddingMachineHooks tests", () => {
    const source={
        "uuid": "0005",
        "city":"Seattle",
        "location": "401 Terry Ave N",
        "category": "house",
        "type":"3 Bed",
        "rentTime":"long-term",
        "owner": {
            "type":"real estate",
          "portrait": "http://clipart-library.com/images/gieEdLqzT.jpg",
          "name":"NEU",
          "connect":"real-eatate@neu.com",
          "rate":5
        },
        "updateDate": "November 22nd 2019, 7:12 am",
        "pictures":["https://cdn.pixabay.com/photo/2014/08/11/21/32/fireplace-416042_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/09/08/22/03/luggage-930804_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/02/24/12/18/apartment-2094654_1280.jpg"],
        "price":"5000",
        "unit":"month",
        "rate":5,
        "recommend":5,
        "available":true,
        "CommunityAmenities":["Walk to Amazon Campus","Controlled Access Garage","Easy Access to Highways and Transit","Resident Social Events"],
        "ApartmentAmenities":["Spacious Closets","Private Balcony","Quartz Countertops","Vaulted Ceilings"]
      }
      describe('Test suits for MyComponentWithLink', () => {
        it('should match with snapshot', () => {
        const tree = render(
            <BrowserRouter>
              <Source source={source} key={source.uuid} />
            </BrowserRouter>
          )
          
         expect(tree).toMatchSnapshot();
         });
    });
});