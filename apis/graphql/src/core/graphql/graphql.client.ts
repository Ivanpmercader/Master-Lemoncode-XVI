const url = '/graphql';

interface GraphqlProps<T> {
    query: string;
    variables?: T;
}

export const graphql = async <Response, T = unknown>(
    props: GraphqlProps<T>
): Promise<Response> => {

        const { query, variables } = props;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
    });

    const { data, errors } = await response.json();

    if (errors) {
        console.error(errors);
    }

    return data;
};