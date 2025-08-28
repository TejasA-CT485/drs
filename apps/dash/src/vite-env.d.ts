/// <reference types="vite/client" />

import type { RowData } from "@tanstack/react-table"
import type React from "react"

declare module "@tanstack/react-table" {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface TableMeta<TData extends RowData> {
		editableState: [number[], React.Dispatch<React.SetStateAction<number[]>>]
	}
}
