long_closed =
  <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"/>

long_open =
  <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google">
    hello
  </BaseForm>

long_open_long_children =
  <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google">
    <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google">
      Hello world
    </BaseForm>
    <div><div><div><div><div><div>hey hiya how are ya</div></div></div></div></div></div>
    <div><div><div><div attr="long" attr2="also long" attr3="gonna break"></div></div></div></div>
    <div><div><div>
      <div attr="long" attr2="also long" attr3="gonna break" attr4="hello please break me" />
    </div></div></div>
    <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"><BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"></BaseForm>d</BaseForm>
    <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"><BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"></BaseForm></BaseForm>
  </BaseForm>

short_closed =
  <BaseForm url="/auth/google" method="GET"/>

short_open =
  <BaseForm url="/auth/google" method="GET">
    hello
  </BaseForm>

make_self_closing =
  <div>
    <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google">
    </BaseForm>
    <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"></BaseForm>
  </div>

leave_opening =
  <BaseForm url="/auth/google" method="GET" colour="blue" size="large" submitLabel="Sign in with Google"> </BaseForm>
