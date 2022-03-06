import { Header } from "../../components/atoms/wrapper/Header";
import * as React from "react";
import { Link } from "react-router-dom";
import CalloutBox from "../../components/molecules/boxes/CalloutBox";
import { Main } from "./styles";
import DiaryContentBox from "../../components/molecules/boxes/DiaryContentBox";

function DiaryWeeklyList() {
  return (
    <>
      <Header>
        <Link to="/">
          <div className="back-button"></div>
        </Link>
        <div className="title">List of your weekly moods</div>
      </Header>
      <Main>
        <CalloutBox>
          These were analyzed using our model, based on what you’ve written
          during last week. We show you in order of the most related diaries.
        </CalloutBox>
        <DiaryContentBox
          key="1"
          created_date=""
          title="What can I do?"
          content="So scary.. There’s nobody who will be on my side."
        />
        <DiaryContentBox
          key="1"
          created_date=""
          title="What can I do?"
          content="So scary.. There’s nobody who will be on my side."
        />
        <DiaryContentBox
          key="1"
          created_date=""
          title="What can I do?"
          content="So scary.. There’s nobody who will be on my side."
        />
        <DiaryContentBox
          key="1"
          created_date=""
          title="What can I do?"
          content="So scary.. There’s nobody who will be on my side."
        />
      </Main>
    </>
  );
}

export default DiaryWeeklyList;
