export type Edge = [from: number, to: number]

export interface DirectedAcyclicGraph {
	add( list: Edge[] ): void

	getPath( idFrom: number, idTo: number ): Edge[]

	hasCycle(): boolean
}
