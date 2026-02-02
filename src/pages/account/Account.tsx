import * as Tabs from "@radix-ui/react-tabs";

export const Account = () => {
  return (
    <div className="flex w-9">
        <Tabs.Root className="flex" defaultValue="account">
          <Tabs.List className="md: flex flex-col justify-start w-[227px] h-auto m-5 mt-0">
            <Tabs.Trigger className="md: text-start w-[227px] text-accentDark p-2 hover:text-500 data-[state=active]:bg-[#E4E2DF] rounded" value="account">Аккаунт</Tabs.Trigger>
            <Tabs.Trigger className="md: text-start w-[227px] text-accentDark p-2 hover:text-500 data-[state=active]:bg-[#E4E2DF] rounded" value="orders">Мои заказы</Tabs.Trigger>
            <Tabs.Trigger className="md: text-start w-[227px] text-accentDark p-2 hover:text-500 data-[state=active]:bg-[#E4E2DF] rounded" value="history">История заказов</Tabs.Trigger>
            <Tabs.Trigger className="md: text-start w-[227px] text-accentDark p-2 hover:text-500 data-[state=active]:bg-[#E4E2DF] rounded" value="notifications">Уведомления</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="bg-white" value="account">
            {/* <Personal_account  /> */}
          </Tabs.Content>
          <Tabs.Content value="orders">Мои заказы</Tabs.Content>
          <Tabs.Content value="history">История заказов</Tabs.Content>
          <Tabs.Content value="notifications">Уведомления</Tabs.Content>
        </Tabs.Root>
    </div>
  );
};

