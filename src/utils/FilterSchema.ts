export type CreateFilterData = {
    entity: string;
    displayName: string;
    displayNameCode: string;
    column: string;
    picklistName?: string;
    filterType?: string;
    multiselect?: string;
    horizontalLayout?: string;
    rangeFilter?: string;
    customOptions: {
      label: string;
      value: string;
    }[];
}